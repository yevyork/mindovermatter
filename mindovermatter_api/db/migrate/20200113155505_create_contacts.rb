class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :contact
      t.text :message

      t.timestamps
    end
  end
end
