import {updateTimes, initializeTimes} from './Main';

test('Returns the correct times for the selected date', () => {
  const state = [
    '17:00',
    '18:00',
  ];

  expect(updateTimes(state, '20/20/2020')).toBe(state);
});


test('Returns the correct initial times', () => {
  expect(initializeTimes()).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
});
