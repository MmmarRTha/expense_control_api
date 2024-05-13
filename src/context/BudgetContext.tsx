import { useReducer, createContext, Dispatch } from "react"
import { BudgetActions, BudgetSate, budgetReducer, initialBudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetSate
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: React.ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState)

    return (
        <BudgetContext.Provider 
            value={{ 
                state, 
                dispatch 
            }}
        >
            {children}
        </BudgetContext.Provider>   
    )
}