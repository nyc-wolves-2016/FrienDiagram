class User2Devise < ApplicationRecord
  has_many :friendships, foreign_key: :friender_id
  has_many :friendees, through: :friendships, source: :friendee
  has_many :frienders, through: :friendships, source: :friender
  has_many :user_addresses
  has_many :invitations, foreign_key: :guest_id
  has_many :events, foreign_key: :host_id
  has_many :votes
  has_many :voted_venues, through: :votes, source: :venue_choice

  has_secure_password

  def friends
    self.frienders + self.friendees
  end
end
