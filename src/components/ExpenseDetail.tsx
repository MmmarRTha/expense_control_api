import { useMemo } from 'react'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import { formatDate } from '../helpers'
import { Expense } from '../types'
import AmountDisplay from './AmountDisplay'
import { categories } from '../data/categories'
import { useBudget } from '../hooks/useBudget'
import "react-swipeable-list/dist/styles.css"

type ExpenseDetailProps = {
    expense : Expense
}

export default function ExpenseDetail({expense} : ExpenseDetailProps) {
    const { dispatch } = useBudget()
    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => dispatch({type: 'get-expense-by-id', payload: {id: expense.id}})}
            >
                Update
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'remove-expense', payload: {id: expense.id} })}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="flex items-center w-11/12 gap-5 p-5 px-12 mx-auto mb-2 border-b shadow bg-linear-to-r from-gray-200 to-gray-300 shadow-indigo-300 lg:w-full md:max-w-3xl">
                    <div>
                        <img 
                            src={`/icono_${categoryInfo.icon}.svg`} 
                            alt="icon expense" 
                            className="w-16 md:w-20"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p className="text-sm font-bold">{expense.expenseName}</p>
                        <p className="text-sm">{ formatDate( expense.date!.toString() )}</p>
                    </div>
                    <AmountDisplay 
                        amount={expense.amount} 
                    />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
