class CreateMerches < ActiveRecord::Migration[6.0]
  def change
    create_table :merches do |t|
      t.string :img_url
      t.string :title
      t.text :description
      t.string :link_to_merch

      t.timestamps
    end
  end
end
