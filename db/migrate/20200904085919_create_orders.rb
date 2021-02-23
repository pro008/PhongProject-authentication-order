class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :order_settings do |t|
    	t.integer :user_id
    	t.string :title
      t.integer :status, default: 0
      t.string :description

      t.timestamps
    end
  end
end
