class CreateVenueChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :venue_choices do |t|
      t.string :name
      t.string :vicinity
      t.integer :rating
      t.string :price_level
      t.string :place_id
      t.float :latitude
      t.float :longitude
      t.references :event

      t.timestamps
    end
  end
end
