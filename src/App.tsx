import BudgetForm from "./components/BudgetForm"

function App() {

  return (
    <>
        <header className="max-h-72">
            <h1 className="py-8 rounded-sm bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-sky-800 uppercase text-center font-black text-4xl text-sky-950">Expense Control</h1>
        </header>

        <div className="w-11/12 md:max-w-3xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg mt-12 p-10 shadow-md  shadow-indigo-300">
            <BudgetForm />
        </div>
    </>
  )
}

export default App
