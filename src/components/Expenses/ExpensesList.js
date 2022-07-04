import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    return (
      props.items.length > 0 ?
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      : <h2 className="expenses-list__fallback">found no expenses.</h2>
    );
}

export default ExpensesList;
