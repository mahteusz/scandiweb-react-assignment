import React, { PureComponent } from "react";
import * as S from './styled'
import Logo from '../../images/logo.png'
import Cart from '../../images/cart.png'
import ArrowDown from '../../images/arrow-down.png'
import CurrencySelector from "../CurrencySelector";
import MiniCart from "../MiniCart";
import { connect } from "react-redux"
import { toggleCurrencySelector, setSelectedCurrency } from "../../redux/Actions/currencyActions";
import { setSelectedCategory } from "../../redux/Actions/categoryActions";
import { toggleMiniCart } from "../../redux/Actions/cartActions";

class Header extends PureComponent {

    constructor(props) {
        super(props)

        this.currencySelectorRef = React.createRef();
        this.miniCartRef = React.createRef();
        this.checkClick = this.checkClick.bind(this)
        this.toggleCurrencySelector = this.toggleCurrencySelector.bind(this)
        this.toggleMiniCart = this.toggleMiniCart.bind(this)
        this.handleNavigation = this.handleNavigation.bind(this)
        this.renderMenuItems = this.renderMenuItems.bind(this)
        this.renderActionItems = this.renderActionItems.bind(this)
    }

    toggleCurrencySelector() {
        if(this.props.isMiniCartOpen)
            this.props.toggleMiniCart()

        this.props.toggleCurrencySelector()
    }

    toggleMiniCart() {
        this.props.toggleMiniCart()
    }

    handleNavigation(category) {
        this.props.setSelectedCategory(category)
    }

    checkClick(event) {
        if (this.currencySelectorRef &&
            !this.currencySelectorRef.current.contains(event.target) &&
            this.props.isCurrencySelectorOpen) {
            this.toggleCurrencySelector()
        }

        if(this.miniCartRef &&
            !this.miniCartRef.current.contains(event.target) &&
            this.props.isMiniCartOpen){
                this.toggleMiniCart()
        }
    }

    renderMenuItems() {
        return (
            this.props.categories?.map(category => {
                return (
                    <S.MenuItem
                        highlight={this.props.selectedCategory === category.name}
                    >
                        <S.CategoryName
                            highlight={this.props.selectedCategory === category.name}
                            onClick={() => this.handleNavigation(category.name)}
                            to={`/category/${category.name}`}
                        >
                            {category.name}
                        </S.CategoryName>
                    </S.MenuItem>
                )
            })
        )
    }

    renderActionItems() {
        return (
            <>
                <S.ActionItem
                    onClick={() => this.toggleCurrencySelector()}
                    ref={this.currencySelectorRef}
                >
                    <S.CurrencySelectorItem>
                        {this.props.selectedCurrency?.symbol}
                    </S.CurrencySelectorItem>

                    <S.CurrencySelectorItem rotate={this.props.isCurrencySelectorOpen}>
                        <img src={ArrowDown} alt="cur" />
                    </S.CurrencySelectorItem>
                    <CurrencySelector />
                </S.ActionItem>

                <S.ActionItem
                    onClick={() => this.toggleMiniCart()}
                    ref={this.miniCartRef}
                >
                    <img src={Cart} alt="cart" />
                    {
                        this.props.productsCounter > 0 &&
                        <S.CartProductsQuantity>
                            {
                                this.props.productsCounter < 10 ?
                                this.props.productsCounter : '9+'
                            }
                        </S.CartProductsQuantity>
                    }
                    <MiniCart />
                </S.ActionItem>
            </>
        )
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.checkClick);
        if(this.props.isMiniCartOpen)
            this.toggleMiniCart()
        
        if(this.props.isCurrencySelectorOpen)
            this.toggleCurrencySelector()

    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.checkClick)
    }

    render() {
        return (
            <S.Container>
                <S.NavBar>
                    <S.NavContainer>
                        {this.renderMenuItems()}
                    </S.NavContainer>

                    <div>
                        <img src={Logo} alt="logo" />
                    </div>

                    <S.NavContainer>
                        {this.renderActionItems()}
                    </S.NavContainer>
                </S.NavBar>
            </S.Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCategory: state.categoryReducer.selectedCategory,
        categories: state.categoryReducer.categories,
        currencies: state.currencyReducer.currencies,
        selectedCurrency: state.currencyReducer.selectedCurrency,
        isCurrencySelectorOpen: state.currencyReducer.isCurrencySelectorOpen,
        isMiniCartOpen: state.cartReducer.isMiniCartOpen,
        productsCounter: state.cartReducer.productsCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedCurrency: selectedCurrency => dispatch(setSelectedCurrency(selectedCurrency)),
        toggleCurrencySelector: () => dispatch(toggleCurrencySelector()),
        toggleMiniCart: () => dispatch(toggleMiniCart()),
        setSelectedCategory: category => dispatch(setSelectedCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)