import { useMemo, useState } from 'react'
import { useBudget } from '../hooks/useBudget'

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)
    const { dispatch } = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({type: 'add-budget', payload: { budget }})
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit} >
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl font-bold text-center text-sky-700">
                    Define a Budget
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full p-2 bg-white border rounded-md bordger-gray-200"
                    placeholder="Define your budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-center ">
                <input
                    type="submit"
                    value='Define Budget'
                    className="w-full p-2 mt-5 font-black text-white uppercase cursor-pointer bg-sky-600 hover:bg-sky-700 disabled:opacity-40 rounded-xl max-w-64"
                    disabled={isValid}
                />
            </div>
        </form>
    )
}
