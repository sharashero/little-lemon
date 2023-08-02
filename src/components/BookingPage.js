import BookingForm from "./BookingForm";

function BookingPage({ availableTimes }) {
  return (
    <div className="booking-page container">
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
}

export default BookingPage;
