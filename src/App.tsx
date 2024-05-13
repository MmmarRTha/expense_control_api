import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"

function App() {

    const { state } = useBudget()
    const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
        <header className="max-h-72">
            <h1 className="py-8 rounded-sm bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-sky-700 uppercase text-center font-black text-4xl text-sky-950">Expense Control</h1>
        </header>

        <div className="w-11/12 p-10 mx-auto mt-12 rounded-lg shadow-md md:max-w-3xl bg-gradient-to-r from-gray-200 to-gray-300 shadow-indigo-300">
            {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </div>
        {isValidBudget && (
            <main className="max-w-3xl py-10 mx-auto">
                <ExpenseModal />
            </main>
        )}
    </>
  )
}

export default App
