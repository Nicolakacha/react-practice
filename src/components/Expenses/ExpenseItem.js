import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem({ date, title, amount }) {
  const [titleState, setTitle] = useState(title);
  const clickHandler = () => setTitle('newTitle');

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
