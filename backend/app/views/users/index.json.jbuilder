json.array! @users do |user|
  json.id user.id
  json.full_name user.full_name
  json.gender user.gender
  json.birth_date user.birth_date
  json.image_url user.image_url
end