class WelcomeController < ApplicationController
  def index
    if !current_user
      render 'users/registrations/new'
    elsif user_signed_in?
      @token = form_authenticity_token
      session[:user_id] = current_user.id
      @friends = current_user.friends
    end
  end
end
