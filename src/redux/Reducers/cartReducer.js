import { ActionTypes } from "../constants"
import { equals } from "../utils/cart"

const initialState = {
  cartProducts: [],
  isMiniCartOpen: false,
  productsCounter: 0,
  totalPrices: {}
}

const stackProductsWithSameAttributes = (productToBeAdded, products) => {
  const productsUpdated = [...products]
  for (let i = 0; i < productsUpdated.length; i++) {
    if (productsUpdated[i].id === productToBeAdded.id) {
      if (equals(productsUpdated[i].selectedAttributes, productToBeAdded.selectedAttributes)){
        productsUpdated[i].quantity += 1
        return productsUpdated
      }
    }
  }
  productsUpdated.push(productToBeAdded)
  return productsUpdated
}

const removeProduct = (productToBeRemoved, products) => {
  const productsUpdated = [...products]
  for (let i = 0; i < productsUpdated.length; i++) {
    if (productsUpdated[i].id === productToBeRemoved.id) {
      if (equals(productsUpdated[i], productToBeRemoved)) {
        productsUpdated[i].quantity > 1 ? productsUpdated[i].quantity -= 1 : productsUpdated.splice(i, 1)
        return productsUpdated
      }
    }
  }
  return productsUpdated
}

const updatePrices = (prices, total, add=true) => {
  const newPrices = {}
  if(add)
    prices.forEach(price => {
        newPrices[price.currency.label] = parseFloat((price.amount + (total?.[price.currency.label] || 0)).toFixed(2))
    })
  
  else 
    prices.forEach(price => {
      newPrices[price.currency.label] = parseFloat((total[price.currency.label] - price.amount).toFixed(2))
  })


  return newPrices
} 

export const cartReducer = (state = initialState, { type, payload }) => {  
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state, cartProducts: stackProductsWithSameAttributes(payload, state.cartProducts),
        productsCounter: state.productsCounter + 1,
        totalPrices: updatePrices(payload.prices, state.totalPrices)
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state, cartProducts: removeProduct(payload, state.cartProducts),
        productsCounter: state.productsCounter - 1,
        totalPrices: updatePrices(payload.prices, state.totalPrices, false)
      }
    case ActionTypes.TOGGLE_MINI_CART:
      return { ...state, isMiniCartOpen: !state.isMiniCartOpen }
    default:
      return state
  }
}