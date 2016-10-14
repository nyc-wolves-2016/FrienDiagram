class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
<<<<<<< HEAD
      t.integer :host_id
=======
      t.references :user
      t.string :title
>>>>>>> working on form to create new event
      t.string :venue
      t.string :venue_address
      t.float :venue_latitude
      t.float :venue_longitude
      t.datetime :date

      t.timestamps
    end
  end
end
