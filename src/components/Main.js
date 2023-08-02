import { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";


const allTimes = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

function fetchAPI(date) {
  const day = new Date(date).getDay();
  const available = [...allTimes.slice(0, day), ...allTimes.slice(day + 1)];

  return new Promise((resolve) => resolve(available));
}

export function updateTimes(state, action) {
  const next = {...state};

  switch (action.type) {
    case 'update_day':
      next.day = action.value;
      break;
      
    case 'update_times':
      next.times = action.value;
      break;

    default:
      break;
  }

  return next;
}

function Main() {
  const [schedle, dispatch] = useReducer(updateTimes, {
    day: new Date(),
    times: []
  });

  useEffect(() => {
    (async function() {
      const value = await fetchAPI(schedle.day);
      dispatch({type: 'update_times', value});
    })();
  }, [schedle.day]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={schedle.times} onDateChange={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;
