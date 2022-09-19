import { ActionTypes } from "../constants"

export const addProductToCart = product => {
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const removeProductFromCart = product => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: product
    }
}

export const toggleMiniCart = () => {
    return {
        type: ActionTypes.TOGGLE_MINI_CART,
        payload: {}
    }
}