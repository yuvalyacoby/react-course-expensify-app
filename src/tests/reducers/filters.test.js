import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set out default filters values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test text' });
  expect(state.text).toBe('test text');
})

test('should set start date filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', date });
  expect(state.startDate).toBe(date);
})

test('should set end date filter', () => {
  const date = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', date });
  expect(state.endDate).toBe(date);
})
