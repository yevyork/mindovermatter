class AddColumnToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :subject, :string
  end
end
