class User < ApplicationRecord
  has_many :created_friendships, class_name: :Friendship, foreign_key: :friender_id
  has_many :accepted_friendships, class_name: :Friendship, foreign_key: :friendee_id
  has_many :friendees, through: :created_friendships, source: :friendee
  has_many :frienders, through: :accepted_friendships, source: :friender
  has_many :user_addresses
  has_many :invitations, foreign_key: :guest_id
  has_many :events, foreign_key: :host_id
  has_many :votes
  has_many :voted_venues, through: :votes, source: :venue_choice
  has_many :invited_events, through: :invitations, source: :event
  has_many :hosts, through: :invited_events
# Neccessary for Paperlip GEM #


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
   validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

 def friends
   self.frienders + self.friendees
 end

 def primary_address
   self.user_addresses.find { |add| add.status == "Primary" }
 end

end
