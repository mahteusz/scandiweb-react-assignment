import { ActionTypes } from "../constants"

const initialState = {
  cartProducts: [],
  isMiniCartOpen: false,
  productsCounter: 0
}

const stackProductsWithSameAttributes = (productToBeAdded, products) => {
  const productsUpdated = [...products]
  for (let i = 0; i < productsUpdated.length; i++) {
    if (productsUpdated[i].id === productToBeAdded.id) {
      if (Object.entries(productsUpdated[i].selectedAttributes).sort().toString() === Object.entries(productToBeAdded.selectedAttributes).sort().toString()) {
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
      if (Object.entries(productsUpdated[i]).sort().toString() === Object.entries(productToBeRemoved).sort().toString()) {
        productsUpdated[i].quantity > 1 ? productsUpdated[i].quantity -= 1 : productsUpdated.splice(i, 1)
        return productsUpdated
      }
    }
  }
  return productsUpdated
}

export const cartReducer = (state = initialState, { type, payload }) => {  
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state, cartProducts: stackProductsWithSameAttributes(payload, state.cartProducts),
        productsCounter: state.productsCounter + 1
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state, cartProducts: removeProduct(payload, state.cartProducts),
        productsCounter: state.productsCounter - 1
      }
    case ActionTypes.TOGGLE_MINI_CART:
      return { ...state, isMiniCartOpen: !state.isMiniCartOpen }
    default:
      return state
  }
}