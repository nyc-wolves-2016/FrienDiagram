class EventsController < ApplicationController
  def index
  end

  def show
    @user = current_user
    @event = Event.find(params[:id])
  end

  def new
    @friends = current_user.friends
    @event = Event.new
  end

end
