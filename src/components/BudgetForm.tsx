import { useMemo, useState } from 'react'

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    return (
        <form className="space-y-5" >
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl font-bold text-center text-sky-700">
                    Define a Budget
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full p-2 bg-white border bordger-gray-200"
                    placeholder="Define your budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                value='Define Budget'
                className="w-full p-2 font-black text-white uppercase rounded-lg cursor-pointer  bg-sky-600 hover:bg-sky-700 disabled:opacity-40"
                disabled={isValid}
            />
        </form>
    )
}
