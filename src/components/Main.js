import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

export function updateTimes(state, newDate) {
  return state;
}

export function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} onDateChange={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;
