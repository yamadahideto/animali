class CreateFacilities < ActiveRecord::Migration[5.2]
  def change
    create_table :facilitys do |t|
      t.string      :name,      null: false
      t.string      :adless,    null: false
      # t.references  :animal
      t.timestamps
    end
  end
end













      t.string :name,                 null: false
      t.string :phonetic,             null: false

      t.string :prefecture,           null: false
      t.string :city,                 null: false
      t.string :municipalities,       null: false
      t.integer :phone_number,        null: false, unique: true
      t.references :message,          foreign_key: true
      t.references :animal,           foreign_key: true