export type BudgetActions = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'hide-modal' }


export type BudgetSate = {
    budget: number
    modal: boolean
}

export const initialBudgetState: BudgetSate = {
    budget: 0,
    modal: false
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

    if (action.type === 'show-modal') {
        return { 
            ...state, 
            modal: true
        }
    }

    if (action.type === 'hide-modal') {
        return { 
            ...state, 
            modal: false
        }
    }

    return state
}