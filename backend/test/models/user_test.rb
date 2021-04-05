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
require "test_helper"

class UserTest < ActiveSupport::TestCase
  date_string = "19/12/1990"
  date = Date.strptime(date_string, "%d/%m/%y")

  test 'valid user' do
    user = User.new(
      full_name: 'Mario Vizcaino',
      birth_date: date,
      gender: "male",
      image_url: "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
    )
    assert user.valid?
  end

  test 'invalid image_url' do
    user = User.new(
      full_name: 'Mario Vizcaino',
      birth_date: date,
      gender: "male",
      image_url: "hola"
    )
    refute user.valid?
    assert_not_nil user.errors[:image_url]
  end

  test 'invalid without full_name' do
    user = User.new(
      birth_date: date,
      gender: "male"
    )
    refute user.valid?
    assert_not_nil user.errors[:full_name]
  end

  test 'invalid without gender' do
    user = User.new(
      full_name: 'Mario Vizcaino',
      birth_date: date,
    )
    refute user.valid?
    assert_not_nil user.errors[:gender]
  end

  test 'invalid without birth_date' do
    user = User.new(
      full_name: 'Mario Vizcaino',
      gender: "male"
    )
    refute user.valid?
    assert_not_nil user.errors[:birth_date]
  end

end
