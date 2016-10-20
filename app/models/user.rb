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



  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
 def friends
   self.frienders + self.friendees
 end

 def primary_address
   self.user_addresses.find { |add| add.status == "Primary" }
 end

 def bookmarks
   bookmarks = self.voted_venues.map do |venue|
     venue.place_id
   end
 end

 def current_events
   self.events.select do |event|
     event.date > Time.now
   end
 end

 def current_invited_events
   self.invited_events.select do |event|
     event.date > Time.now
   end
 end

 def pending_events
   self.current_events.select do |event|
     event.status == "Open"
   end
 end

 def declined_events
   self.current_events.select do |event|
     event.status == "Decline"
   end
 end

 def accepted_events
   self.current_events.select do |event|
     event.status == "Confirmed"
   end
 end

 def open_invites
   self.current_invited_events.select do |event|
     event.status == "Open"
   end
 end

 def accepted_invites
   self.current_invited_events.select { |event| event.status == "Confirmed" }
 end


 def upcoming_events
   self.accepted_events + self.accepted_invites
 end

end
