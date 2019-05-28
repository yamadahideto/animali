class CreateFacilities < ActiveRecord::Migration[5.2]
  def change
    create_table :facilitys do |t|
      t.string      :name,      null: false
      t.string      :adless,    null: false
      t.references  :animal
      t.timestamps
    end
  end
end
