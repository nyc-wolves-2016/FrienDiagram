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
    # render component: 'Dashboard', { homeBases: @home_bases, friends: @friends, token: @token }
  end

  def show
    puts "*" * 25
    puts "why am i in here?"
    puts params
    puts "*" * 25
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
      host_id:          form[:host_id],
      title:            form[:title],
      host_address_id:  form[:host_address_id].to_i,
      date:             form[:date],
      event_type:       form[:event_type]
      })
    if @event.save
      Invitation.create(guest_id: params[:invitation][:guest_id], event: @event)
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
