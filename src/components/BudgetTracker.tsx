import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {

    const { state, totalExpenses, remainingBudget } = useBudget();
    
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Expenses graphic" />
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
                <button 
                    type="button"
                    className="px-12 py-2 font-bold text-white uppercase bg-pink-600 rounded-lg md:w-full hover:bg-pink-700"
                >
                    Reset App
                </button>
                <AmountDisplay
                    label="Budget"
                    amount={state.budget}
                />

                <AmountDisplay
                    label="Available"
                    amount={remainingBudget}
                />

                <AmountDisplay
                    label="Total Expense"
                    amount={totalExpenses}
                />

            </div>
        </div>
    )
}
