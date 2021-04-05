import React, { createContext, useReducer } from "react";
import axios from "axios";

const UsersContext = createContext();

const { Provider, Consumer } = UsersContext;

const initialState = {
  users: null,
  user: null,
};

const get = async (url) => {
  // aca debo hacer el get de axios
  const res = await axios.get(url);
  return res.data;
};

const post = async (url, data) => {
  const res = await axios.post(url, data);
  return { status: res.status, data: res.data };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        users: action.data,
      };
    case "SET_ITEM":
      return { ...state, user: action.data };
    case "ADD_ITEM":
      const _users = [...state.users, action.data];
      return { ...state, users: _users };
    default:
      break;
  }
};

function UsersProvider({ children }) {
  const [state, setReducerUsers] = useReducer(reducer, initialState);

  const getAllUsers = async () => {
    let res = await get("/api/users");
    setReducerUsers({ type: "SET_LIST", data: res });
  };

  const getUser = async (user_id) => {
    let res = await get(`/api/users/${user_id}`);
    setReducerUsers({ type: "SET_ITEM", data: res });
  };

  const createUser = async (data) => {
    const json = {
      user: {
        ...data,
        image_url: "https://via.placeholder.com/150",
      },
    };
    const res = await post("/api/users", json);

    if (res.status === 201)
      setReducerUsers({ type: "ADD_ITEM", data: { ...data, id: res.data.id } });
  };

  const value = {
    users: state.users,
    user: state.user,
    getAllUsers,
    getUser,
    createUser,
    clearUser: () => setReducerUsers({ type: "SET_ITEM", data: null }),
  };

  return <Provider value={value}>{children}</Provider>;
}

export { Consumer as UsersConsumer, UsersContext, UsersProvider };
