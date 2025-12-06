import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

    const { state } = useBudget()
    const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

    useEffect(() => {
        localStorage.setItem('budget', state.budget.toString())
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state])

  return (
    <>
        <header className="max-h-72">
            <h1 className="py-8 uppercase text-center font-black text-5xl text-gray-200">Expense Control</h1>
        </header>

        <div className="w-11/12 p-10 mx-auto mt-12 rounded-lg shadow-md md:max-w-3xl bg-linear-to-r from-gray-200 to-gray-300 shadow-indigo-300">
            {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </div>
        {isValidBudget && (
            <main className="max-w-3xl py-8 mx-auto">
                <FilterByCategory />
                <ExpenseList />
                <ExpenseModal />
            </main>
        )}
    </>
  )
}

export default App
