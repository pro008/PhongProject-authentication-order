# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin_user = User.create(user_name: "Admin", email: "admin123@gmail.com", is_admin: true, password: "Admin1234")
author_user = User.create(user_name: "Phong Vuong", email: "phong.vuong008@gmail.com", is_admin: true, password: "Admin1234")
user1 = User.create(email: "normal.user001@gmail.com", is_admin: false, password: "Admin1234")
user2 = User.create(email: "normal.user002@gmail.com", is_admin: false, password: "Admin1234")

8.times do |n|
	admin_user.order_settings.create(title: "Order #{n}", description: "description #{n}", status: rand(0...4) )
	user1.order_settings.create(title: "Order user 1 - #{n}", description: "description user 1 - #{n}", status: rand(0...4) )
	user2.order_settings.create(title: "Order user 2 - #{n}", description: "description user 2 - #{n}", status: rand(0...4) )
end




