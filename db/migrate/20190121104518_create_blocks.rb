class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
    add_index :blocks, :code, unique: true
  end
end
