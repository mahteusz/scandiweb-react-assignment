import { PureComponent } from "react";
import * as S from './styled'
import { connect } from "react-redux";
import Header from "../Header";
import { ProductBrand, AttributeName, Price } from "../ProductPage/styled";
import { getSelectedCurrencyIndex, calculateTotal } from "../utils";
import { addProductToCart, removeProductFromCart } from "../../redux/Actions/cartActions";
import ArrowLeft from "../../images/arrow-left.png"
import ArrowRight from "../../images/arrow-right.png"

class Cart extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            imgIndex: {},
            count: 0,
            totalPrice: 0
        }

        this.handleAddProductToCart = this.handleAddProductToCart.bind(this)
        this.handleRemoveProductFromCart = this.handleRemoveProductFromCart.bind(this)
        this.setAllImgIndex = this.setAllImgIndex.bind(this)
        this.setImgIndex = this.setImgIndex.bind(this)
        this.renderProducts = this.renderProducts.bind(this)
        this.renderProductAttribute = this.renderProductAttribute.bind(this)
        this.renderProductInfo = this.renderProductInfo.bind(this)
        this.renderProductImageContainer = this.renderProductImageContainer.bind(this)
        this.renderTotalContainer = this.renderTotalContainer.bind(this)
    }

    handleAddProductToCart(product) {
        this.props.addProductToCart(product)
    }

    handleRemoveProductFromCart(product) {
        this.props.removeProductFromCart(product)
    }

    renderProductAttribute(attribute, product) {
        return(
            <>
                <AttributeName>
                    {attribute.name}:
                </AttributeName>
                <S.AttributeContainer>
                    {
                        attribute.items.map(item => {
                            if (attribute.type === 'swatch')
                                return (
                                    <S.AttributeSwatch
                                        selected={product.selectedAttributes[attribute.name]==item.value}
                                        color={item.value}
                                    />
                                )
                            else
                                return (
                                    <S.AttributeText
                                        selected={product.selectedAttributes[attribute.name]==item.value}
                                    >
                                        <S.AttributeTextContent>
                                            {item.value}
                                        </S.AttributeTextContent>
                                    </S.AttributeText>
                                )
                            }
                        )
                    }
                </S.AttributeContainer>
            </>
        )
    }

    renderProductInfo(product) {
        return (
                <S.InfoContainer>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <S.ProductName>{product.name}</S.ProductName>
                    <Price>
                        {this.props.selectedCurrency.symbol}
                        {product.prices[getSelectedCurrencyIndex(product, this.props.selectedCurrency)].amount}
                    </Price>
                    {
                        product.attributes.map(attribute => {
                            return this.renderProductAttribute(attribute, product)
                    })}
                </S.InfoContainer>
            )
    }

    renderProductImageContainer(product) {
        return (
            <S.ProductImageContainer>
                <S.ProductQuantityContainer>
                    <S.ProductQuantityButtonContainer 
                        onClick={() => this.handleAddProductToCart(product)}
                        >
                        +
                    </S.ProductQuantityButtonContainer>
                    <S.ProductQuantityText>
                        {product.quantity}
                    </S.ProductQuantityText>
                    <S.ProductQuantityButtonContainer
                        onClick={() => this.handleRemoveProductFromCart(product)}
                    >
                        -
                    </S.ProductQuantityButtonContainer>
                </S.ProductQuantityContainer>

                <S.ImageContainer>
                    <S.ProductImage src={product.gallery[this.state.imgIndex[product.id]]} />
                    {
                        product.gallery.length > 1 &&
                        <S.ArrowButtonsContainer>
                            <S.ArrowButton onClick={() => this.setImgIndex(product, -1)}>
                                <S.Arrow src={ArrowLeft} />
                            </S.ArrowButton>
                            <S.ArrowButton onClick={() => this.setImgIndex(product, 1)}>
                                <S.Arrow src={ArrowRight} />
                            </S.ArrowButton>
                        
                        </S.ArrowButtonsContainer>
                    }
                </S.ImageContainer>
            </S.ProductImageContainer>
        )
    }

    renderProducts() {
        return (
            <S.ProductsContainer>
            {
                this.props.products?.map(product => {
                    return(
                        <S.ProductContainer>
                            {this.renderProductInfo(product)}
                            {this.renderProductImageContainer(product)}
                        </S.ProductContainer>
                    )})
            }
            </S.ProductsContainer>
        )
    }

    renderTotalContainer() {
        return (
            <S.TotalContainer>
                <S.TotalContentContainer>
                    <S.TotalContentInfo>
                        Tax 21%:
                    </S.TotalContentInfo>
                    <S.TotalContentInfo>
                        Quantity:
                    </S.TotalContentInfo>
                    <S.TotalContentInfo>
                        Total:
                    </S.TotalContentInfo>                   
                </S.TotalContentContainer>

                <S.TotalContentContainer>
                    <S.TotalContentValues>
                        {(this.state.totalPrice * 0.21).toFixed(2)}
                    </S.TotalContentValues>
                    <S.TotalContentValues>
                        {this.state.count}
                    </S.TotalContentValues>
                    <S.TotalContentValues>
                        {this.state.totalPrice}
                    </S.TotalContentValues>
                </S.TotalContentContainer>           
            </S.TotalContainer>
        )
    }

    setAllImgIndex(){
        const imgIndex = {}
        this.props.products.forEach(prod => {
            imgIndex[prod.id] = 0
        })
        this.setState({imgIndex:imgIndex})
        console.log(this.state)
    }

    setImgIndex(prod, step) {
        this.setState(prevState => ({
            imgIndex: {
                ...prevState.imgIndex,
                [prod.id]: Math.max(0, Math.min(prevState.imgIndex[prod.id] + step, prod.gallery.length-1))
                //clamping between 0 and gallery length
            }
        }))
    }

    componentDidMount() {
        this.setState(calculateTotal(this.props.products, this.props.selectedCurrency))
        this.setAllImgIndex()
        console.log(this.props.products)
    }

    componentDidUpdate() {
        this.setState(calculateTotal(this.props.products, this.props.selectedCurrency)) 
    }


    render() {
        return(
            <>
                <Header />
                <S.Container>
                    <S.CartTitle>
                        Cart
                    </S.CartTitle>
                    {this.renderProducts()}
                    {this.renderTotalContainer()}
                    <S.OrderButton>
                        Order
                    </S.OrderButton>
                </S.Container>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.cartReducer.cartProducts,
        selectedCurrency: state.currencyReducer.selectedCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)