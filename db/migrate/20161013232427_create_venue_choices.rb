class CreateVenueChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :venue_choices do |t|
      t.string :name
      t.string :address
      t.integer :rating
      t.string :price
      t.references :event
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
