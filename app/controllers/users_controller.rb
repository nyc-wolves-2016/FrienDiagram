class UsersController < ApplicationController
  def index
  end

  def show
    if current_user != User.find_by(id: params[:id])
      redirect_to root_path
    else
      @user = current_user
    end

  end

  private
  def user_params
    params.permit(:email)
  end
end
