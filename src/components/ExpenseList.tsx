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
                    <p className="w-48 mx-auto text-2xl font-bold text-center text-white uppercase bg-pink-700 rounded">Expense List:</p>
                    {state.expenses.map(expense => (
                        <ExpenseDetail key={expense.id} expense={expense} />
                    ))}
                </>
            )}
        </div>
    )
}
