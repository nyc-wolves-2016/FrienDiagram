class EventsController < ApplicationController
  before_action :find_user
  def index
    if user_signed_in?
      @token = form_authenticity_token
      session[:user_id] = current_user.id
      @friends = current_user.friends
      @home_bases = current_user.user_addresses
    else
      redirect_to root_path
    end
  end

  def show
    if !user_signed_in?
      redirect_to root_path
    else
      @event = Event.find_by(id: params[:id])
      if !@event.invitees.include?(current_user)
        redirect_to root_path
      else
        @possibleVenues = @event.venue_choices
        @bookmarks = current_user.bookmarks
      end
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
    binding.pry
    @event =  current_user.events.new(event_params)
    if @event.save
      @event.guests << User.find_by(id: params[:event][:guests])
      redirect_to event_path(@event)
    else
      render 'new'
    end
  end

  def update
    event = Event.find_by(id: params[:id])
    event.update_attributes(:status => "Accepted", :guest_address_id => params[:event][:guest_addresses])
    event.save
    redirect_to event_path
  end

  private
  def event_params
    params.permit(:title, :date, :host_id, :host_address_id, :guest_address_id)
  end

  def find_user
    @user = current_user
  end
end
