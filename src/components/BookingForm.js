import { useState } from "react";

const OCCASION = [
  'Birthday',
  'Anniversary',
]


function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const [form, setForm] = useState({
    date: '',
    time: availableTimes[0],
    guests: 0,
    occasion: OCCASION[0],
  });

  function handleSubmit(event) {
    event.preventDefault();
    // validate
    console.log(form);
    // onSubmit(form);
  }

  function handleDateChange(event) {
    setForm({ ...form, 'date': event.target.value });
    onDateChange({type: 'update_day',  value: event.target.value});
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={form.date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={form.time}
        onChange={(event) => setForm({ ...form, 'time': event.target.value })}
      >
          {availableTimes.map(time => <option key={time}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={form.guests}
        onChange={(event) => setForm({ ...form, 'guests': event.target.valueAsNumber })}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.occasion}
        onChange={(event) => setForm({ ...form, 'occasion': event.target.value })}
      >
          {OCCASION.map(occasion => <option key={occasion}>{occasion}</option>)}
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
