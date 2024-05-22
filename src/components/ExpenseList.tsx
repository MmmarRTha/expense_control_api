import { useMemo } from 'react'
import { useBudget } from '../hooks/useBudget'
import ExpenseDetail from './ExpenseDetail'

export default function ExpenseList() {

    const {state} = useBudget()
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
    return (
        <div>
            {isEmpty ? <p className="p-2 mx-auto my-2 text-2xl font-bold text-center text-white uppercase bg-pink-700 rounded-lg w-96">There is no expenses yet</p> : (
                <>
                    <p className="flex items-center w-11/12 p-2 px-5 mx-auto mt-5 text-2xl font-bold text-center bg-gradient-to-r from-gray-200 to-gray-300 shadow-indigo-300 lg:w-full md:max-w-3xl">Expense List:</p>
                    {state.expenses.map(expense => (
                        <ExpenseDetail key={expense.id} expense={expense} />
                    ))}
                </>
            )}
        </div>
    )
}
