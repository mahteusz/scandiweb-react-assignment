import React, { PureComponent } from "react"
import { connect } from "react-redux"
import * as S from './styled'
import { setSelectedCurrency } from "../../redux/Actions/currencyActions";

class CurrencySelector extends PureComponent {
    constructor(props){
        super(props)

        this.setCurrency = this.setCurrency.bind(this)
    }

    setCurrency(currency){
        this.props.setSelectedCurrency(currency)
    }

    render() {
        return (
            <S.Container>
                {
                    this.props.isOpen ?
                        this.props.currencies?.map(currency => {
                            return(
                                <S.CurrencyContainer
                                    onClick={() => this.setCurrency(currency)}>
                                    <S.CurrencyItem>
                                        {currency.symbol}
                                    </S.CurrencyItem>
                                    <S.CurrencyItem>
                                        {currency.label}
                                    </S.CurrencyItem>
                                </S.CurrencyContainer>
                            )
                        })
                        :
                        <></>
                }
            </S.Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.currencyReducer.currencies,
        isOpen: state.currencyReducer.isCurrencySelectorOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setSelectedCurrency: selectedCurrency => dispatch(setSelectedCurrency(selectedCurrency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)