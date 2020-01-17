class AddPastBooleanToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :past_event, :boolean
  end
end
