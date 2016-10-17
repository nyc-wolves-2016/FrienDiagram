class VenueChoicesController < ApplicationController

  def create
    event = Event.find_by(id: params[:event_id])
    venue = VenueChoice.create(venue_params)
    event.venue_choices << venue
    Vote.create(user: current_user, venue_choice: venue )
  end

  def venue_params
    params.require(:venue).permit(:name, :vicinity, :rating, :price_level, :place_id)
  end
end
