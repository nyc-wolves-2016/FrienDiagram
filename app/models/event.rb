class Event < ApplicationRecord
  has_many :venue_choices
  has_many :invitations
  belongs_to :host, class_name: :User
  has_many :guests, through: :invitations
  has_many :guest_addresses, through: :guests, source: :user_addresses

  def invitees
    self.guests + [self.host]
  end

end
