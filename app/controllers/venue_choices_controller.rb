class VenueChoicesController < ApplicationController

  def create
    event = Event.find(params[:event_id])
    venue = VenueChoice.new(venue_params)
    if venue.save
    end
  end

  def destroy
    event = Event.find(params[:event_id])
    venue = VenueChoice.find(params[:id])
    if venue
      if venue.destroy
      end
    end
  end

  def venue_params
    params.require(:venue).permit(:name, :vicinity, :rating, :price_level, :place_id, :event_id)
  end
end
