import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('Renders the BookingForm time options', () => {
  render(
    <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => undefined} onSubmit={() => undefined} />
  );

  const option1 = screen.getByText('17:00');
  expect(option1).toBeInTheDocument();

  const option2 = screen.getByText('18:00');
  expect(option2).toBeInTheDocument();
});
