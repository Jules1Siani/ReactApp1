import React, { useState } from 'react';

const timeslots = [
  '09:00 - 12:00',
  '12:00 - 15:00',
  '15:00 - 18:00',
];

function ReservationForm({ addReservation }) {
  const [zone, setZone] = useState('');
  const [timeslot, setTimeslot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zone && timeslot) {
      addReservation(zone, timeslot);
      setZone('');
      setTimeslot('');
    } else {
      alert('Please select a zone and a time slot.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success">Reservation</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="zone" className="form-label">Zone</label>
          <select
            id="zone"
            className="form-select"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            <option value="">Select a zone</option>
            <option value="Peace Forest">Peace Forest</option>
            <option value="Mountain Park">Mountain Park</option>
            <option value="Swan Lake">Swan Lake</option>
            <option value="Botanical Garden">Botanical Garden</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="timeslot" className="form-label">Time Slot</label>
          <select
            id="timeslot"
            className="form-select"
            value={timeslot}
            onChange={(e) => setTimeslot(e.target.value)}
          >
            <option value="">Select a time slot</option>
            {timeslots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success w-100">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm;
