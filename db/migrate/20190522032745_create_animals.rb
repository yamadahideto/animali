class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string      :name
      # t.integer     :age
      # t.string      :castration               # 去勢の有無
      # t.string      :sex,         null: false # 性別
      # t.string      :kind,        null: false # 犬種など
      # t.text        :recruitment, null: false #  募集経緯
      # t.text        :character,   null: false #  性格・特徴
      # t.text        :condition,   null: false # 健康状態
      # t.text        :delivery,    null: false # 引き取り方法
      # t.text        :remarks                  # その他・備考
      # t.references  :user
      # t.timestamps
    end
  end
end
