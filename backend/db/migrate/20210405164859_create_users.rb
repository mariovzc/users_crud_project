class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.date :birth_date
      t.string :gender
      t.string :image_url

      t.timestamps
    end
  end
end