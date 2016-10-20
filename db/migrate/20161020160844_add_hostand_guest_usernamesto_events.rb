class AddHostandGuestUsernamestoEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :guest_username, :string
    add_column :events, :host_username, :string
  end
end
