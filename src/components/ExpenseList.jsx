import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
        <div>
            {expenses.length === 0 ? <p>No expenses added yet.</p> : expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
            ))}
        </div>
    );
};

export default ExpenseList;
