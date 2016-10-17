class Friendship < ApplicationRecord
  belongs_to :friendee, class_name: :User
  belongs_to :friender, class_name: :User

  validates :friendee_id, uniqueness: { scope: :friender_id }
end
