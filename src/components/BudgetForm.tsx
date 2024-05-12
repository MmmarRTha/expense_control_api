import { useState } from 'react'

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }
    return (
        <form className="space-y-5" >
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-sky-700 font-bold text-center">
                    Define a Budget
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border bordger-gray-200 p-2"
                    placeholder="Define your budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                value='Define Budget'
                className=" rounded-lg bg-sky-600 hover:bg-sky-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
            />
        </form>
    )
}
