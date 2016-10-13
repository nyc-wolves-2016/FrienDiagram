class VenueChoice < ApplicationRecord
  has_many :votes
  belongs_to :event
end
