import React from 'react'
import { categories } from '../data/categories'

export default function ExpenseForm() {
  return (
    <form className='space-y-5' action="">
        <legend className='py-2 text-2xl font-black text-center uppercase border-b-4 border-sky-500'>
            New Expense
        </legend>

        <div className='flex flex-col gap-2'>
            <label 
                htmlFor="expenseName"
                className='text-xl font-semibold'
            >Expense Name:
            </label>
            <input 
                type="text"
                id='expenseName' 
                className='p-2 border border-gray-300 rounded bg-slate-100' 
                name='expenseName'
                placeholder='Enter Expense Name'
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label 
                htmlFor="amount"
                className='text-xl font-semibold '
            >Amount:
            </label>
            <input 
                type="text"
                id='amount' 
                className='p-2 border border-gray-300 rounded bg-slate-100' 
                name='amount'
                placeholder='Add amount expense: example 100'
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label 
                htmlFor="category"
                className='text-xl font-semibold '
            >Category:
            </label>
            <select
                id='category' 
                name='category'
                className='p-2 border border-gray-300 rounded bg-slate-100'
            >
                <option value="">-- Select --</option>
                {categories.map( category => (
                    <option 
                        key={category.id} 
                        value={category.id}
                    >{category.name}
                    </option>   
                ))}
            </select>
        </div>
        <input 
            type="submit" 
            value={'Add Expense'}
            className='w-full p-2 text-xl font-bold text-white uppercase cursor-pointer rounded-xl bg-sky-500 hover:bg-sky-600'
        />

    </form>
  )
}
