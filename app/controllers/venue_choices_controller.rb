class VenueChoicesController < ApplicationController

  def create
    event = Event.find_by(id: params[:event_id])
    event.venue_choices.create(venue_params)
  end

  def venue_params
    params.require(:venue).permit(:name, :vicinity, :rating, :price_level, :place_id)
  end
end
