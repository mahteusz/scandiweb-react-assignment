import { ActionTypes } from "../constants"

export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}