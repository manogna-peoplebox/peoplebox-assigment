class AddConstraintsToAppointments < ActiveRecord::Migration[8.0]
  def change
    # Ensure essential fields are not null
    change_column_null :appointments, :doctor_id, false
    change_column_null :appointments, :patient_id, false
    change_column_null :appointments, :appointment_date, false

    # Add unique index to enforce no duplicate appointments
    add_index :appointments, [:doctor_id, :patient_id, :appointment_date], unique: true, name: 'unique_doctor_patient_appointment'
  end
end
