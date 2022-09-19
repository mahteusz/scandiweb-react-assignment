export const getSelectedCurrencyIndex = (product, selectedCurrency) => {
    let currencyIndex = 0
    product.prices.forEach((price, index) => {
        if (price.currency.label === selectedCurrency.label) {
            currencyIndex = index
        }
    })
    return currencyIndex
}
