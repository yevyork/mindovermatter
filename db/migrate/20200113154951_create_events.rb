class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.date :date
      t.string :imgurl
      t.string :organizer
      t.string :venue
      t.text :artists
      t.string :supporting_artists
      t.string :ticket_link

      t.timestamps
    end
  end
end
