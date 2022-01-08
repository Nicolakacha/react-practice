import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.js';
function ExpenseList({ items }) {
  return (
    <ul>
      {items.length === 0 ? (
        <p className='expenses-list__fallback'>No expenese found.</p>
      ) : (
        items.map(({ date, title, amount, id }) => (
          <ExpenseItem key={id} date={date} title={title} amount={amount} />
        ))
      )}
    </ul>
  );
}

export default ExpenseList;
