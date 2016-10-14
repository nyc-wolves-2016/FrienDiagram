class EventsController < ApplicationController
  def index
  end

  def show
    @user = current_user
  end

  def new
    @friends = current_user.friends
    @event = Event.new
  end

end
