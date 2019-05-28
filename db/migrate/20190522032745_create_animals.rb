class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string      :name
      t.integer     :age
      t.string      :castration               # 去勢の有無
      t.string      :sex,         null: false # 性別
      t.string      :type,        null: false # 犬種など
      t.text        :Recruitment, null: false #  募集経緯
      t.text        :character,   null: false #  性格・特徴
      t.text        :condition,   null: false # 健康状態
      t.text        :Delivery,    null: false # 引き取り方法
      t.text        :remarks,     null: false # その他・備考
      t.references  :facilitiy
      t.timestamps
    end
  end
end
