import React, { useState } from 'react';

import './Expenses.css';
import ExpenseList from './ExpenseList.js';
import ExpenseFilter from './ExpensesFilter.js';
import Card from '../UI/Card';

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
