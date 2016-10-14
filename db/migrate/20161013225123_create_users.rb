class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string  :email, :password_digest, :username, null: false
      t.timestamps
    end
  end
end
