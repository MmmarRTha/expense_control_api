import { ChangeEvent } from 'react'
import { categories } from '../data/categories'
import { useBudget } from '../hooks/useBudget'

export default function FilterByCategory() {

    const { dispatch } = useBudget()
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'add-filter-category', payload: {id: e.target.value}})
    }
    return (
        <div className="w-11/12 p-10 mx-auto rounded-lg shadow-md lg:w-full md:max-w-3xl bg-linear-to-r from-gray-200 to-gray-300 shadow-indigo-300">
            <form>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <label className='text-lg font-bold' htmlFor="category">Filter Expenses</label>
                    <select 
                        id="category"
                        className="flex-1 p-3 rounded bg-slate-100"
                        onChange={handleChange}
                    >
                        <option value="">-- All Categories</option>
                        {categories.map(category => (
                            <option 
                                key={category.id} 
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}
