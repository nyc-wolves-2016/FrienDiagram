class VenueChoice < ApplicationRecord
  has_many :votes
  belongs_to :event

  geocoded_by :vicinity
  after_validation  :geocode
end
