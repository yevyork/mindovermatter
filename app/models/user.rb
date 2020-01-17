class User < ApplicationRecord
    validates :user, :password_digest, presence:true, uniqueness: true
    has_secure_password
end
