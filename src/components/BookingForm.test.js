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


test('Validates BookingForm form submission', () => {
  const submit = jest.fn();
  render(
    <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => null} onSubmit={submit} />
  );

  const date = '2030-01-01';
  fireEvent.change(screen.getByLabelText('Choose date'), {target: {value: date}});
  fireEvent.change(screen.getByLabelText('Number of guests'), {target: {value: 4}});
  fireEvent.submit(screen.getByText('Make Your Reservation'));
  expect(submit).toBeCalledWith({
    date: date,
    time: '17:00',
    guests: 4,
    occasion: 'Birthday',
  });
});
