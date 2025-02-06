const ExpenseItem = ({ expense, onDeleteExpense }) => {
    return (
        <div className="expense-item">
            <p>{expense.title}</p>
            <p>₹{expense.amount}</p>
            <p>{expense.date}</p>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        </div>
    );
};

export default ExpenseItem;
