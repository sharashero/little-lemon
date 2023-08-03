import { useState } from "react";
import Button from "./Button";
import InvalidFieldMessage from "./InvalidFieldText";

const OCCASION = [
  'Birthday',
  'Anniversary',
]


function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const [form, setForm] = useState({
    date: '',
    dateValid: false,
    dateTouched: false,
    time: availableTimes[0],
    guests: 0,
    guestsValid: false,
    guestsTouched: false,
    occasion: OCCASION[0],
  });

  function handleSubmit(event) {
    event.preventDefault();
    // validate
    onSubmit(form);
  }

  function handleDateChange(event) {
    const value = event.target.value;
    const reference = new Date(new Date().toDateString());
    const dateValid = new Date(value) >= reference;

    setForm({ ...form, date: value, dateValid });
    if (dateValid)
      onDateChange({type: 'update_day',  value});
  }

  function handleGuestsChange(event) {
    const value = event.target.valueAsNumber;
    const guestsValid = (value > 0 && value < 11);
    setForm({ ...form, guests: value, guestsValid });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={form.date}
        onChange={handleDateChange}
        onBlur={() => setForm({ ...form, dateTouched: true })}
        required
        />
      <InvalidFieldMessage show={!form.dateValid && form.dateTouched}>
        <p>Date shouldn't be prior to today</p>
      </InvalidFieldMessage>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={form.time}
        onChange={(event) => setForm({ ...form, 'time': event.target.value })}
        required
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
        onChange={handleGuestsChange}
        onBlur={() => setForm({ ...form, guestsTouched: true })}
        required
      />
      <InvalidFieldMessage show={!form.guestsValid && form.guestsTouched}>
        <p>Guests should be between 1 and 10</p>
      </InvalidFieldMessage>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.occasion}
        onChange={(event) => setForm({ ...form, 'occasion': event.target.value })}
        required
      >
          {OCCASION.map(occasion => <option key={occasion}>{occasion}</option>)}
      </select>

      <Button type="submit">
        Make Your Reservation
      </Button>
    </form>
  );
}

export default BookingForm;
