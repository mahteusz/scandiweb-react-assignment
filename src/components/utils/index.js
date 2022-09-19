export const getSelectedCurrencyIndex = (product, selectedCurrency) => {
    let currencyIndex = 0
    product.prices.forEach((price, index) => {
        if (price.currency.label === selectedCurrency.label) {
            currencyIndex = index
        }
    })
    return currencyIndex
}

export const calculateTotal = (products, selectedCurrency) => {
    let count = 0
    let total = 0
    products.forEach(prod => {
        let prodCount = prod.quantity
        let prodTotal = parseFloat((prod.prices[getSelectedCurrencyIndex(prod, selectedCurrency)].amount * prodCount).toFixed(2))
        count+=prodCount
        total+=prodTotal
    })

    return {count: count, totalPrice: total.toFixed(2)}
}
