import { ActionTypes } from "../constants"

export const setCurrencies = currencies => {
    return {
        type: ActionTypes.SET_CURRENCIES,
        payload: currencies
    }
}

export const setSelectedCurrency = selectedCurrency => {
    return {
        type: ActionTypes.SET_SELECTED_CURRENCY,
        payload: selectedCurrency
    }
}

export const toggleCurrencySelector = () => {
    return {
        type: ActionTypes.TOGGLE_CURRENCY_SELECTOR,
        payload: {}
    }
}