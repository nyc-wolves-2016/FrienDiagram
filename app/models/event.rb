class Event < ApplicationRecord
  has_many :venue_choices
  has_many :invitations
  belongs_to :user
end
