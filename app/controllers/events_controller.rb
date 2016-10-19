class EventsController < ApplicationController
  before_action :find_user
  def index
<<<<<<< HEAD
      if user_signed_in?
        @token = form_authenticity_token
        session[:user_id] = current_user.id
        @friends = current_user.friends
        @home_bases = current_user.user_addresses
      else
        redirect_to root_path
      end
=======
    if user_signed_in?
      # @token = form_authenticity_token
      session[:user_id] = current_user.id
      # @friends = current_user.friends
      # @home_bases = current_user.user_addresses
      if current_user.user_addresses.length > 0
        @addressStatus = "true"
      else
        @addressStatus = "false"
      end
      @user_profile = {
        id: current_user.id,
        addressStatus: @addressStatus,
        friends: current_user.friends,
        addresses: current_user.user_addresses,
        token: form_authenticity_token,
        open_invites: current_user.open_invites,
        open_events: current_user.open_events,
        upcoming_events: current_user.upcoming_events
      }

    else
      redirect_to root_path
    end
>>>>>>> finalize the hash object to be passed in as params in the Dashboard component
    # render component: 'Dashboard', { homeBases: @home_bases, friends: @friends, token: @token }
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
    form = params[:event]
    @event = Event.new({
      host_id: form[:host_id],
      title: form[:title],
      host_address_id: form[:host_address_id].to_i,
      date: form[:date],
      event_type: form[:event_type]
      })
    if @event.save
<<<<<<< HEAD
      if current_user === @event.host
        redirect_to events_path
      else
        Invitation.create(guest_id: params[:invitation][:guest_id], event: @event)
        redirect_to event_path(@event)
      end
=======
      Invitation.create(guest_id: params[:invitation][:guest_id], event: @event)
      redirect_to root_path
>>>>>>> finalize the hash object to be passed in as params in the Dashboard component
    else
      render 'new'
    end
  end

  def update
    binding.pry
      event = Event.find_by(id: params[:id])
      response = params[:invitation][:response]
      if response == "Accept"
        event.update_attributes(:status => response, :guest_address_id => params[:event][:guest_address_id])
      else
        event.update_attributes(:status => response)
      end
    event.save
    redirect_to events_path
  end

  def confirm
    # binding.pry
    event = Event.find_by(id: params[:id])
      if event.status == "Open"
        event.update_attributes(venue: params[:name], venue_address:   params[:address],status: "Confirmed")
      else
        render json: {errors:["This event has already been confirmed or doesn't exist."]}
      end
    # event.update_attributes()
    # event.save
    # redirect_to event_path
  end
  private
  def find_user
    @user = current_user
  end

  def event_params
    params.require(:event).permit(:host_id, :title, :type, :host_address_id, :date)
  end
end
