class Event < ApplicationRecord
  has_many :venue_choices
  has_many :invitations
  belongs_to :host, class_name: :User
  has_many :guests, through: :invitations
  has_many :guest_addresses, through: :guests, source: :user_addresses
  before_save :midpoint, :host_username, :guest_username, :day

  def host_coordinates
    if has_both_points
      [UserAddress.find_by(id: self.host_address_id).latitude, UserAddress.find_by(id: self.host_address_id).longitude]
    end
  end

  def guest_coordinates
    if has_both_points
      [UserAddress.find_by(id: self.guest_address_id).latitude, UserAddress.find_by(id: self.guest_address_id).longitude]
    end
  end

  def midpoint
    if has_both_points
      self.midpoint = [(self.host_coordinates[0] + self.guest_coordinates[0]) / 2 , (self.host_coordinates[1] + self.guest_coordinates[1]) / 2 ]
    end
  end

  def coordinates
    { guest: self.guest_coordinates, host: self.host_coordinates, mid: self.midpoint }
  end

  def has_both_points
    self.host_address_id && self.guest_address_id
  end

  def invitees
    self.guests + [self.host]
  end

  def host_address
    UserAddress.find_by(id: self.host_address_id)
  end

  def guest_address
    UserAddress.find_by(id: self.guest_address_id)
  end

  def host_username

    self.host_username = self.host.username
  end

  def guest_username
    if self.guest_address_id
      self.guest_username = self.guests.first.username
    end
  end

  def day
    self.day = self.date.to_date
  end

  def hour
    self.hour = self.date.strftime('%I:%M:%S %p')
  end


end
