class User < ApplicationRecord
  has_many :friendships, foreign_key: :friender_id
  has_many :friendees, through: :friendships, source: :user
  has_many :frienders, through: :friendships, source: :user
  has_many :user_addresses
  has_secure_password

  def friends
    self.frienders + self.friendees
  end
end
