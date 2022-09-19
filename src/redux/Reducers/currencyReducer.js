import { ActionTypes } from "../constants"

const initialState = {
    selectedCurrency: {
        "label": "USD",
        "symbol": "$"
    },
    isCurrencySelectorOpen: false
}

export const currencyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CURRENCIES:
            return {...state, currencies: payload};
        case ActionTypes.SET_SELECTED_CURRENCY:
            return {...state, selectedCurrency: payload}
        case ActionTypes.TOGGLE_CURRENCY_SELECTOR:
            return {...state, isCurrencySelectorOpen: !state.isCurrencySelectorOpen}
        default:
            return state;
    }
} 