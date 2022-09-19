import { ActionTypes } from "../constants"

export const categoryReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CATEGORIES_PRODUCTS:
            return {...state, categories: payload};
        case ActionTypes.SET_SELECTED_CATEGORY:
            return {...state, selectedCategory: payload}
        default:
            return state;
    }
} 