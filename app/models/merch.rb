class Merch < ApplicationRecord
    validates :img_url, :title, :description, :link_to_merch, presence: true
end
