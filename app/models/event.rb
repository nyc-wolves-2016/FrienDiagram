class Event < ApplicationRecord
  has_many :venue_choices
  has_many :invitations
  belongs_to :host, class_name: :User
  has_many :guests, through: :invitations
  has_many :guest_addresses, through: :guests, source: :user_addresses

  def host_coordinates
    [UserAddress.find_by(id: self.host_address_id).latitude, UserAddress.find_by(id: self.host_address_id).longitude]
  end

  def guest_coordinates
    [UserAddress.find_by(id: self.guest_address_id).latitude, UserAddress.find_by(id: self.guest_address_id).longitude]
  end

  def midpoint
    [(self.host_coordinates[0] + self.guest_coordinates[0]) / 2 , (self.host_coordinates[1] + self.guest_coordinates[1]) / 2 ]
  end

  def invitees
    self.guests + [self.host]
  end

end
