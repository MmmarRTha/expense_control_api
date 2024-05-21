import { ChangeEvent, useEffect, useState } from 'react';
import type { DraftExpense, Value } from '../types';
import { categories } from '../data/categories';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import ErrorMessage from './ErrorMessage';
import { useBudget } from '../hooks/useBudget';

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    });

    const [error, setError] = useState('');
    const { dispatch, state } = useBudget();

    useEffect(() => {
        if(state.editingId) {
            const editingExpense = state.expenses.filter( currentExpense => currentExpense.id === state.editingId)[0];
            setExpense(editingExpense);
        }
    }, [state.editingId]);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isAmountField = ['amount'].includes(name);
        setExpense({
            ...expense,
            [name] : isAmountField ? +value : value
        });
    }

    const handleChangeDate  = (value : Value) => {
        setExpense({
            ...expense,
            date: value
        });
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(expense).includes('')) {
            setError('All fields are required');
            return
        }

        if(state.editingId) {
            dispatch({ type: 'edit-expense', payload: { expense: {id: state.editingId, ...expense}} })
        } else {
            dispatch({ type: 'add-expense', payload: { expense } });
        }

        setExpense({
            expenseName: '',
            amount: 0,
            category: '',
            date: new Date()
        })
    }

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
        <legend className='py-2 text-2xl font-black text-center uppercase border-b-4 border-sky-500'>
            New Expense
        </legend>
        {error && <ErrorMessage>{error}</ErrorMessage>}

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
                onChange={handleChange}
                value={expense.expenseName}
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
                onChange={handleChange}
                value={expense.amount}
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
                onChange={handleChange}
                value={expense.category}
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
        <div className='flex flex-col gap-2'>
            <label 
                htmlFor="amount"
                className='text-xl font-semibold '
            >Amount Date:
            </label>
            <DatePicker
                className='p-2 border border-gray-300 rounded bg-slate-100'
                value={expense.date} 
                onChange={handleChangeDate}
            />
        </div>
        <input 
            type="submit" 
            value={'Add Expense'}
            className='w-full p-2 text-xl font-bold text-white uppercase cursor-pointer rounded-xl bg-sky-500 hover:bg-sky-600'
        />

    </form>
  )
}
