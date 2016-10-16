class Event < ApplicationRecord
  has_many :venue_choices
  has_many :invitations
  belongs_to :host, class_name: :User
  has_many :guests, through: :invitations

  def invitees
    binding.pry
    self.guests + [self.host]
  end

end
