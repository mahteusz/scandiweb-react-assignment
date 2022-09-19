import { PureComponent } from "react";
import * as S from './styled'
import { connect } from "react-redux";
import { InfoContainer } from "../Cart/styled";
import { getSelectedCurrencyIndex } from "../utils/cart";
import { addProductToCart, removeProductFromCart } from "../../redux/Actions/cartActions";

class MiniCart extends PureComponent {
    constructor(props) {
        super(props)

        this.handleAddProductToCart = this.handleAddProductToCart.bind(this)
        this.handleRemoveProductFromCart = this.handleRemoveProductFromCart.bind(this)
        this.renderSwatchAttribute = this.renderSwatchAttribute.bind(this)
        this.renderProductAttribute = this.renderProductAttribute.bind(this)
        this.renderProductInfo = this.renderProductInfo.bind(this)
        this.renderProductImageContainer = this.renderProductImageContainer.bind(this)
        this.renderProduct = this.renderProduct.bind(this)
        this.renderProducts = this.renderProducts.bind(this)
        this.renderTotalContainer = this.renderTotalContainer.bind(this)
        this.renderButtonsContainer = this.renderButtonsContainer.bind(this)
        this.renderTextAttributes = this.renderTextAttributes.bind(this)
        this.renderCartData = this.renderCartData.bind(this)
        this.renderEmptyCartData = this.renderEmptyCartData.bind(this)
    }

    handleAddProductToCart(product) {
        this.props.addProductToCart(product)
    }

    handleRemoveProductFromCart(product) {
        this.props.removeProductFromCart(product)
    }

    renderSwatchAttribute(item, attribute, product) {
        return (
            <S.AttributeSwatch
                selected={product.selectedAttributes[attribute.name] == item.value}
                color={item.value}
            />
        )
    }

    renderTextAttributes(item, attribute, product) {
        return (
            <S.AttributeText
                selected={product.selectedAttributes[attribute.name] == item.value}
            >
                <S.AttributeTextContent>
                    {item.value}
                </S.AttributeTextContent>
            </S.AttributeText>
        )
    }

    renderProductAttribute(product) {
        return (
            product.attributes.map(attribute => {
                return (
                    <>
                        <S.AttributeName>
                            {attribute.name}:
                        </S.AttributeName>
                        <S.AttributeContainer>
                            {
                                attribute.items.map(item => {
                                    if (attribute.type === 'swatch')
                                        return this.renderSwatchAttribute(item, attribute, product)
                                    else
                                        return this.renderTextAttributes(item, attribute, product)
                                }
                                )
                            }
                        </S.AttributeContainer>
                    </>
                )
            })
        )
    }

    renderProductInfo(product) {
        return (
            <InfoContainer>
                <S.ProductInfo>
                    {product.brand}
                </S.ProductInfo>
                <S.ProductInfo>
                    {product.name}
                </S.ProductInfo>
                <S.ProductPrice>
                    {this.props.selectedCurrency.symbol}
                    {product.prices[getSelectedCurrencyIndex(product, this.props.selectedCurrency)].amount}
                </S.ProductPrice>
                {this.renderProductAttribute(product)}
            </InfoContainer>
        )
    }

    renderProductImageContainer(product) {
        return (
            <S.ProductImageContainer>
                <S.ProductQuantityContainer>
                    <S.ProductQuantityButtonContainer
                        onClick={() => this.handleAddProductToCart(product)}>
                        +
                    </S.ProductQuantityButtonContainer>
                    <S.ProductQuantityText>
                        {product.quantity}
                    </S.ProductQuantityText>
                    <S.ProductQuantityButtonContainer
                        onClick={() => this.handleRemoveProductFromCart(product)}>
                        -
                    </S.ProductQuantityButtonContainer>
                </S.ProductQuantityContainer>
                <S.ImageContainer>
                    <S.ProductImage src={product.gallery[0]} />
                </S.ImageContainer>
            </S.ProductImageContainer>
        )
    }

    renderProduct(product) {
        return (
            <S.ProductContainer>
                {this.renderProductInfo(product)}
                {this.renderProductImageContainer(product)}
            </S.ProductContainer>
        )
    }

    renderProducts() {
        return (
            <S.ProductsContainer>
                {
                    this.props.products.map(product => {
                        return this.renderProduct(product)
                    })
                }
            </S.ProductsContainer>
        )
    }

    renderTotalContainer() {
        return (
            <S.TotalContainer>
                <S.TotalContentInfo>
                    Total
                </S.TotalContentInfo>

                <S.TotalContentValues>
                    {this.props.selectedCurrency.symbol}
                    {this.props.totalPrices[this.props.selectedCurrency.label]}
                </S.TotalContentValues>
            </S.TotalContainer>
        )
    }

    renderButtonsContainer() {
        return (
            <S.ButtonsContainer>
                <S.ViewBagButton to="/cart">
                    View Bag
                </S.ViewBagButton>

                <S.CheckOutButton disabled={this.props.productsCounter < 1}>
                    Check out
                </S.CheckOutButton>
            </S.ButtonsContainer>
        )
    }

    renderCartData() {
        return (
            <>
                {this.renderProducts()}
                {this.renderTotalContainer()}
                {this.renderButtonsContainer()}
            </>
        )
    }

    renderEmptyCartData() {
        return <>
                    <S.EmptyCartMessage>Your cart is currently empty</S.EmptyCartMessage>
                    {this.renderButtonsContainer()}
                </>
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

    }

    render() {
        return (
            <>
                {
                    this.props.isOpen ?
                        <>
                            <S.CartContainer onClick={(e) => e.stopPropagation()}>
                                <S.CartTitleContainer>
                                    <S.CartTitle>
                                        My Bag
                                    </S.CartTitle>
                                    <S.CartItemsNumber>
                                        {`, ${this.props.productsCounter} ${this.props.productsCounter > 1 ? 'items' : 'item'}`}
                                    </S.CartItemsNumber>
                                </S.CartTitleContainer>
                                {
                                    this.props.productsCounter > 0 ? 
                                    this.renderCartData()
                                    :
                                    this.renderEmptyCartData()
                                }
                            </S.CartContainer>
                            <S.Overlay />
                        </>
                        :
                        <></>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.cartReducer.isMiniCartOpen,
        products: state.cartReducer.cartProducts,
        productsCounter: state.cartReducer.productsCounter,
        totalPrices: state.cartReducer.totalPrices,
        selectedCurrency: state.currencyReducer.selectedCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)