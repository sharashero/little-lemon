import { Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useState } from 'react';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} />
      </Routes>
    </main>
  );
}

export default Main;
