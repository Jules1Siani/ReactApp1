import React, { useState } from 'react';
import ZoneList from './components/ZoneList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (zone, timeslot) => {
    setReservations([...reservations, { zone, timeslot }]);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Reservation System</span>
        </div>
      </nav>
      <div className="container mt-4">
        <ZoneList />
        <ReservationForm addReservation={addReservation} />
        <ReservationList reservations={reservations} />
      </div>
    </>
  );
}

export default App;
