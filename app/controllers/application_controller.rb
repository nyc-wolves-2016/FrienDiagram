class ApplicationController < ActionController::Base
  helper_method :log_out, :logged_in?, :current_user, :log_in
  helper_method :resource_name, :resource, :devise_mapping

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
