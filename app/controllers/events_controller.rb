class EventsController < ApplicationController
  def index
  end

  def show
    @user = current_user
    @event = Event.find(params[:id])
    @possibleVenues = @event.venue_choices
    render json: @possibleVenues
  end

  def new
    @event = Event.new
    @friends = current_user.friends
  end

end
