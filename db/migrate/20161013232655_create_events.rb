class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :host_id
      t.string  :title
      t.string  :venue
      t.string  :venue_address
      t.float   :venue_latitude
      t.float   :venue_longitude
      t.integer :host_address_id
      t.integer :guest_address_id
      t.string  :midpoint
      t.string  :status, default: "Open"
      t.datetime :date
      t.date    :day
      t.integer :hour

      t.timestamps
    end
  end
end
