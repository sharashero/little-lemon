import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, onDateChange }) {
  return (
    <div className="booking-page container">
      <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} />
    </div>
  );
}

export default BookingPage;
