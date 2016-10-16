class EventsController < ApplicationController
  before_action :find_user
  def index
  end

  def show
    @event = Event.find(params[:id])
    @user = current_user
    if @event.invitees.include?(current_user)
      if @event.venue_choices
        @possibleVenues = @event.venue_choices
      end
    else
      redirect_to root_path
    end
  end

  def search
    render json: @possibleVenues
  end
  def new
    @event = Event.new
    @friends = current_user.friends
  end

  def create
    @event = Event.new(title: event_params[:title], date: event_params[:date], host: current_user )
    if @event.save
      invite = Invitation.create(guest_id: event_params[:guests], event: @event)
      redirect_to event_path(@event)
    else
      render 'new'
    end
  end

  def update
    event = Event.find_by(id: params[:id])
    event.status = "Accepted"
    event.guest_address = event_params[:guest_address]
    event.save
    redirect_to root_path
  end

  private
  def event_params
    params.require(:event).permit(:title, :date, :host, :guests, :guest_address)
  end

  def find_user
    @user = current_user
  end
end
