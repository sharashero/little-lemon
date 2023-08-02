import BackgroundWrapper from "./BackgroundWrapper";

function ConfirmedBooking() {
  return (
    <BackgroundWrapper background="highlight-dark">
      <div className="text-highlight-light booking-confirm container">
        <h2>Your reservation has been booked successfuly !</h2>
      </div>
    </BackgroundWrapper>
  );
}

export default ConfirmedBooking;
