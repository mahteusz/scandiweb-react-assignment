import { ActionTypes } from "../constants"

export const setCategories = categories => {
    return {
        type: ActionTypes.SET_CATEGORIES_PRODUCTS,
        payload: categories
    }
}

export const setSelectedCategory = category => {
    return {
        type: ActionTypes.SET_SELECTED_CATEGORY,
        payload: category
    }
}


