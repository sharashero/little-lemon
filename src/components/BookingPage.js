import BookingForm from "./BookingForm";

const availableTimes = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00'
];

function BookingPage() {
  return (
    <div className="booking-page container">
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
}

export default BookingPage;
