# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_20_082509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "order_settings", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.integer "status", default: 0
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["status"], name: "index_order_settings_on_status"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name", limit: 16
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin", default: false
    t.string "remember_token"
    t.index ["remember_token"], name: "index_users_on_remember_token"
  end

end
