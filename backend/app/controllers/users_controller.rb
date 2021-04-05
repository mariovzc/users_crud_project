class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :set_user, only: [:show]


  def index
    # todo pagination
    @users = User.all
  end

  def create
    user = User.new(user_params)
    render json: {
      id: user.id,
      resource: "/users/#{user.id}"
    },
    status: 201 if user.save!
    
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:full_name, :gender, :birth_date, :image_url)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def record_not_found
    render json: { message: 'Record Not Found!'}, status: 404
  end
end
