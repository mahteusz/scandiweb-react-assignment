import { ActionTypes } from "../constants";

export const productReducer = (state = {}, { type, payload }) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
}