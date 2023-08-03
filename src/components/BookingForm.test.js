import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('Renders the BookingForm time options', () => {
  render(
    <BookingForm availableTimes={['17:00', '18:00']} />
  );

  const option1 = screen.getByText('17:00');
  expect(option1).toBeInTheDocument();

  const option2 = screen.getByText('18:00');
  expect(option2).toBeInTheDocument();
});


test('Validates BookingForm incorrect date picking', () => {
  render(
    <BookingForm availableTimes={['17:00', '18:00']} />
  );

  const date = screen.getByLabelText('Choose date');
  fireEvent.change(date, {target: {value: '2021-01-01'}})
  fireEvent.blur(date);
  const error = screen.getByText('Date shouldn\'t be prior to today')
  expect(error).toBeInTheDocument();
});


test('Validates BookingForm correct date picking', () => {
  render(
    <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => null} />
  );

  const date = screen.getByLabelText('Choose date');
  fireEvent.change(date, {target: {value: '2030-01-01'}})
  fireEvent.blur(date);
  const error = screen.queryByText('Date shouldn\'t be prior to today');
  expect(error).toBeNull();
});
