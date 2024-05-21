import { useReducer, createContext, Dispatch, useMemo } from "react"
import { BudgetActions, BudgetSate, budgetReducer, initialBudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetSate
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: React.ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState)
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses;

    return (
        <BudgetContext.Provider 
            value={{ 
                state, 
                dispatch,
                totalExpenses,
                remainingBudget 
            }}
        >
            {children}
        </BudgetContext.Provider>   
    )
}