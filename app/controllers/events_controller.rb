class EventsController < ApplicationController
  def index
  end

  def show
    @user = current_user
  end

  def new
    @event = Event.new
  end

end
