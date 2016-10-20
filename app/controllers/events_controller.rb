class EventsController < ApplicationController
  before_action :find_user
  def index
    # TIMELINE DATA
    @allEvents = Event.all.map do |event|
      { venue: event.venue,
        title: event.title,
        host: event.host,
        event_type: event.event_type
        }
    end
    if user_signed_in?
      session[:user_id] = current_user.id
      if current_user.user_addresses.length > 0
        @addressStatus = "true"
      else
        @addressStatus = "false"
      end
      puts "*" * 25
      puts "I'm about to send off the user profile obj"
      puts current_user
      puts "*" * 25
      @user_profile = {
        id: current_user.id,
        addressStatus: @addressStatus,
        friends: current_user.friends,
        addresses: current_user.user_addresses,
        token: form_authenticity_token,
        open_invites: current_user.open_invites,
        pending_events: current_user.pending_events,
        upcoming_events: current_user.upcoming_events
      }
    else
      redirect_to root_path
    end
  end

  def show
    if !user_signed_in?
      redirect_to root_path
    else
      @event = Event.find(params[:id])
      if @event.invitees.include?(current_user) && @event.guest_address_id
        @venueChoices = @event.venue_choices
        @bookmarks = current_user.bookmarks
      else
        redirect_to root_path
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
      Invitation.create(guest_id: params[:invitation][:guest_id], event: @event)
      redirect_to root_path
    else
      render 'new'
    end
  end

  def update
      event = Event.find_by(id: params[:id])
      response = params[:invitation][:response]
      if response == "Accept"
        event.update_attributes(:status => response, :guest_address_id => params[:event][:guest_address_id])
      else
        event.update_attributes(:status => response)
      end
    event.save
    redirect_to event_path
  end

  def confirm
    event = Event.find_by(id: params[:event_id])
      if event.status == "Accept"
        event.update_attributes(venue: params[:name], venue_address:   params[:address],status: "Confirmed")
        render json: {success: ["This event was successfully update"]}
      else
        render json: {errors:["This event has already been confirmed or doesn't exist."]}
      end
    # event.update_attributes()
    # event.save
    # redirect_to event_path
  end

  def reset
    event = Event.find_by(id: params[:id])
    event.update_attributes(venue: "", venue_address: "", status: "Accept")
    event.save
    redirect_to event_path(event)
  end


  private
  def find_user
    @user = current_user
  end

  def event_params
    params.require(:event).permit(:host_id, :title, :type, :host_address_id, :date)
  end
  #a note
end
