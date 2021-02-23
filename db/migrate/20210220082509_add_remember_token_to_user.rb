class AddRememberTokenToUser < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :is_admin, :boolean, default: false
  	add_column :users, :remember_token, :string
    add_index  :users, :remember_token
    add_index  :order_settings, :status
  end
end
