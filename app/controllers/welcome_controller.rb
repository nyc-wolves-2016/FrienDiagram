class WelcomeController < ApplicationController
  def index
    render 'users/registrations/new'
  end
end
