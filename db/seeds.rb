# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

per = User.create(username: "per", email: "per@gmail.com", password: "password123" )
devin = User.create(username: "devin", email: "devin@gmail.com", password: "password123" )
logan = User.create(username: "logan", email: "logan@gmail.com", password: "password123" )
edwin = User.create(username: "edwin", email: "edwin@gmail.com", password: "password123" )
neel = User.create(username: "neel", email: "neel@gmail.com", password: "password123" )
pan = User.create(username: "pan", email: "pan@gmail.com", password: "password123" )

f1 = Friendship.create(friender: per, friendee: devin)
f2 = Friendship.create(friender: per, friendee: logan)
f3 = Friendship.create(friender: per, friendee: edwin)
f4 = Friendship.create(friender: per, friendee: neel)
f5 = Friendship.create(friender: per, friendee: pan)
f6 = Friendship.create(friender: devin, friendee: logan)
f7 = Friendship.create(friender: devin, friendee: edwin)
f8 = Friendship.create(friender: devin, friendee: pan)
f9 = Friendship.create(friender: devin, friendee: neel)
f10 = Friendship.create(friender: logan, friendee: neel)
f11 = Friendship.create(friender: edwin, friendee: neel)

event1 = Event.create(host_id: per.id, venue: "Per's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )
event2 = Event.create(host_id: per.id, venue: "Per's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )
event3 = Event.create(host_id: devin.id, venue: "Time Square's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )
event4 = Event.create(host_id: logan.id, venue: "Per's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )
event5 = Event.create(host_id: neel.id, venue: "Per's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )
event6 = Event.create(host_id: edwin.id, venue: "Per's Palace", venue_address: "1234 six seven", venue_latitude: 40.759011, venue_longitude: -73.984472, date: Time.now )

venue1 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 47.759011, longitude: 40.759011)
venue2 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 57.759011, longitude: 70.759011)
venue3 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 17.759011, longitude: 10.759011)
venue4 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 27.759011, longitude: 20.759011)
venue5 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 23.759011, longitude: 40.759011)
venue6 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 31.759011, longitude: 24.759011)
venue7 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 64.759011, longitude: 97.759011)
venue8 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 64.759011, longitude: 26.759011)
venue9 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 97.759011, longitude: 24.759011)
venue10 = VenueChoice.create(name: "Whitehorse", address: "48 wall street, New York, NY 10001", rating: 5, price: "$$$", event: event1, latitude: 111.759011, longitude: 43.759011)

invite1 = Invitation.create(guest: devin, event: event1)
invite1 = Invitation.create(guest: logan, event: event2)
invite1 = Invitation.create(guest: neel, event: event3)
invite1 = Invitation.create(guest: edwin, event: event4)
invite1 = Invitation.create(guest: devin, event: event5)
invite1 = Invitation.create(guest: devin, event: event6)
