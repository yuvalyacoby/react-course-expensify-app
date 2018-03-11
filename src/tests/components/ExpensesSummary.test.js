import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render ExpensesSummary correctly with one expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
