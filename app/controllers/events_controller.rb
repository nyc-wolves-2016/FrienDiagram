class EventsController < ApplicationController
  before_action :find_user
  def index
    if user_signed_in?
      @token = form_authenticity_token
      session[:user_id] = current_user.id
      @friends = current_user.friends
    end
  end

  def show
    @event = Event.find(params[:id])
    @user = current_user
      if @event.venue_choices
        @possibleVenues = @event.venue_choices
      end
    # else
    #   redirect_to root_path
    # end
  end

  def search
    render json: @possibleVenues
  end

  def new
    @event = Event.new
    @friends = current_user.friends
  end

  def create
    @event =  current_user.events.new(event_params)
    if @event.save
      @event.guests << User.find_by(id: params[:event][:guest])
      redirect_to event_path(@event)
    else
      render 'new'
    end
  end

  def update
    event = Event.find_by(id: params[:id])
    event.update_attributes(:status => "Accepted", :guest_address_id => params[:event][:guest_addresses])
    event.save
    redirect_to root_path
  end

  private
  def event_params
    params.require(:event).permit(:title, :date, :host_id, :host_address_id, :guest_address_id)
  end

  def find_user
    @user = current_user
  end
end
