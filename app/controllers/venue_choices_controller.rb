class VenueChoicesController < ApplicationController

  def create
    event = Event.find(params[:event_id])
    binding.pry
    venue = VenueChoice.new(venue_params)
    if venue.save
      binding.pry
    end
  end

  def delete
    binding.pry
  end

  def venue_params
    params.require(:venue).permit(:name, :vicinity, :rating, :price_level, :place_id)
  end
end
