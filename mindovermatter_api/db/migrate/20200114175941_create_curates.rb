class CreateCurates < ActiveRecord::Migration[6.0]
  def change
    create_table :curates do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.text :answer

      t.timestamps
    end
  end
end
