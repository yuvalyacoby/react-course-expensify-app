export default (expenses) => expenses
  .map((expense) => expense.amount)
  .reduce((acc, curr) => acc + curr, 0);
