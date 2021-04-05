# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  birth_date :date
#  full_name  :string
#  gender     :string
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  validates :full_name, presence: true
  validates :gender, presence: true
  validates :birth_date, presence: true

  URL_REGEXP = /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :image_url, format: { with: URL_REGEXP, message: 'invalid_url' }, allow_blank: true

end
