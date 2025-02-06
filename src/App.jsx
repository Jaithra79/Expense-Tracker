import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpenseHandler = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div className="app">
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense={addExpenseHandler} />
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
            <h2>Total: ₹{expenses.reduce((total, expense) => total + expense.amount, 0)}</h2>
        </div>
    );
}

export default App;
