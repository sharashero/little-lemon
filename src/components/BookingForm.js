import { useState } from "react";

function BookingForm({ availableTimes, onSubmit }) {
  const [form, setForm] = useState({
    date: '',
    time: availableTimes[0],
    guests: 0,
    occasion: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    // validate
    console.log(form);
    // onSubmit(form);
  }

  const handleChange = (key) => (event) => {
    let value;
    switch (event.target.type) {
      case 'number':
        value = event.target.valueAsNumber;
        break;
      default:
        value = event.target.value;
        break;
    }
    setForm({ ...form, [key]: value });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={form.date}
        onChange={handleChange('date')}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={form.time}
        onChange={handleChange('time')}
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
        onChange={handleChange('guests')}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.occasion}
        onChange={handleChange('occasion')}
      >
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
