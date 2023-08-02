import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, onDateChange, onSubmit }) {
  return (
    <div className="booking-page container">
      <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} onSubmit={onSubmit} />
    </div>
  );
}

export default BookingPage;
