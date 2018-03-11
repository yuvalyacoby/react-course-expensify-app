import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    <h2>Viewing {props.expenses.length} expenses totalling {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}</h2>
  </div>
);

const mapStateToProps = (state, props) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
