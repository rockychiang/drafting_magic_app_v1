class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :block_id
      t.string :rarity
      t.string :layout
      t.integer :cmc
      t.text :colors, array: true
      t.text :types, array: true
      t.decimal :rating, precision: 2, scale: 1
      t.string :imgurl
      t.boolean :rare_draft, default: 0

      t.timestamps
    end
  end
end
