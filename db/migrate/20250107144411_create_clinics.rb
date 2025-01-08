# db/migrate/20250103000000_create_clinics.rb
class CreateClinics < ActiveRecord::Migration[6.0]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :address

      t.timestamps
    end
  end
end