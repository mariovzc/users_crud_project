require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_url
    assert_response :success
  end

  test "should create user" do
    assert_difference("User.count") do
      post users_url, params: { 
        user: { 
          full_name: 'Mario Vizcaino',
          birth_date: "19/12/1990",
          gender: "male"
        }
      }
    end
    assert_response :created
  end
end
