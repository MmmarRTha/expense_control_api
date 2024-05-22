import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {

    const { state, totalExpenses, remainingBudget } = useBudget();
    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
    
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex justify-center">
                <CircularProgressbar 
                    value={percentage}
                    styles={buildStyles({
                        textColor: percentage === 100 ? '#DC2626' : '#0284c7',
                        pathColor: percentage === 100 ? '#DC2626' : '#DFFF00',
                        trailColor: '#ADC2D1',
                        textSize: 12
                    })}
                    text={`${percentage}% Spent`}
                />
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
                    label="Total Spent"
                    amount={totalExpenses}
                />

            </div>
        </div>
    )
}
