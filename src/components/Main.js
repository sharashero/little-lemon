import { useEffect, useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from './ConfirmedBooking';


const allTimes = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

function fetchAPI(date) {
  const day = new Date(date).getDay();
  const available = [...allTimes.slice(0, day), ...allTimes.slice(day + 1)];

  return new Promise((resolve) => resolve(available));
}

function submitAPI(data) {
  return new Promise((resolve) => {
    if (Math.random() > 0.4) {
      resolve(true);
    }
    else {
      resolve(false);
    }
  });
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
  const navigate = useNavigate();
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

  function submitForm(data) {
    submitAPI(data).then(success => {
      if (success)
        navigate('/booking-confirm');
    });
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={
          <BookingPage
            availableTimes={schedle.times}
            onDateChange={dispatch}
            onSubmit={submitForm}
          />
        } />
        <Route path="/booking-confirm" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
