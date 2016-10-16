class CreateUserAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :user_addresses do |t|
      t.string :address
      t.references :user, foreign_key: true
      t.float :latitude
      t.float :longitude
      t.string  :status, default: "Primary"

      t.timestamps
    end
  end
end
