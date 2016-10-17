class ApplicationController < ActionController::Base
  # helper_method :log_out, :logged_in?, :current_user, :log_in
  helper_method :resource_name, :resource, :devise_mapping
  before_action :authenticate_user!, :configure_permitted_parameters, if: :devise_controller?
  # -- devise -- #
  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  # def current_user
  #   User.find_by(id: params[:user_id])
  # end
#this is not a change


  # -- devise --

  # def log_in(user)
  #   session[:user_id] = user.id
  # end
  #
  # def current_user
  #   @current_user ||= User.find_by(id: session[:user_id])
  # end
  #
  # def logged_in?
  #   !current_user.nil?
  # end
  #
  # def log_out
  #   session.delete(:user_id)
  #   @current_user = nil
  # end

  protect_from_forgery
end
