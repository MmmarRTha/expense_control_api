export type BudgetActions = {
    type: 'add-budget', payload: { budget: number }
}

export type BudgetSate = {
    budget: number
}

export const initialBudgetState: BudgetSate = {
    budget: 0
}

export const budgetReducer = (
    state: BudgetSate = initialBudgetState,
    action: BudgetActions
) => {
    if (action.type === 'add-budget') {
        return { 
            ...state, 
            budget: action.payload.budget
        }
    }
    return state
}