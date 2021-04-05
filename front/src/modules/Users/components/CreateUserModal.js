import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { UsersContext } from "../provider/UserProvider";
import { useForm } from "react-hook-form";
import { Button, FormGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  error: {
    color: theme.palette.error.main,
  },
  submit_container: {
    textAlign: "Center",
    marginTop: "20px",
  },
  formStyle: {
    padding: 20,
  },
  form_item: {
    padding: 10,
  },
}));

export default ({ open, handleClose }) => {
  const { createUser } = useContext(UsersContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    createUser(data);
    handleClose();
  };

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="create-user">
      <DialogTitle>Create User:</DialogTitle>
      <form className={classes.formStyle} onSubmit={handleSubmit(submit)}>
        <FormGroup className={classes.form_item}>
          <input
            {...register("full_name", { required: true })}
            placeholder="Full Name"
          />
          {errors?.full_name && (
            <span className={classes.error}>{"Required Field"}</span>
          )}
        </FormGroup>
        <FormGroup className={classes.form_item}>
          <input
            placeholder="Birth Date"
            {...register("birth_date", { required: true })}
            type="date"
          />

          {errors?.birth_date && (
            <span className={classes.error}>{"Required Field"}</span>
          )}
        </FormGroup>
        <FormGroup className={classes.form_item}>
          <select {...register("gender", { required: true })}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors?.gender && (
            <span className={classes.error}>{"Required Field"}</span>
          )}
        </FormGroup>
        <div className={classes.submit_container}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Save
          </Button>
        </div>
      </form>
    </Dialog>
  );
};
