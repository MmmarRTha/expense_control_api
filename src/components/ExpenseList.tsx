import { useMemo } from 'react'
import { useBudget } from '../hooks/useBudget'
import ExpenseDetail from './ExpenseDetail'

export default function ExpenseList() {

    const {state} = useBudget()
    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])
    return (
        <div>
            {isEmpty ? <p className="p-2 mx-auto my-2 text-xl font-bold text-center text-white uppercase bg-pink-700 rounded-lg w-96">There is no expenses yet</p> : (
                <>
                    <p className="flex items-center w-11/12 px-5 pt-5 mx-auto mt-8 text-xl font-bold text-center md:text-2xl bg-gradient-to-r from-gray-200 to-gray-300 shadow-indigo-300 lg:w-full md:max-w-3xl">Expense List:</p>
                    {filteredExpenses.map(expense => (
                        <ExpenseDetail key={expense.id} expense={expense} />
                    ))}
                </>
            )}
        </div>
    )
}
