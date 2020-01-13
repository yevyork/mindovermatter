class Contact < ApplicationRecord
    validates :name, :contact, :message, presence: true
end
