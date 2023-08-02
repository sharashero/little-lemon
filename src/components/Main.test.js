import {updateTimes} from './Main';

test('Returns the correct times for the selected date', () => {
  const state = {
    day: new Date(),
    times: []
  };

  expect(updateTimes(state, {type: 'update_times', value: ['17:00', '18:00']})).toEqual({
    ...state, times: ['17:00', '18:00']
  });
});
