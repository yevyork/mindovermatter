class ChangeColumnNameInContacts < ActiveRecord::Migration[6.0]
  def change
    rename_column :contacts, :contact, :contact_info
  end
end
