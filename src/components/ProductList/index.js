import { PureComponent } from "react";
import { connect } from "react-redux";
import Header from '../Header'
import * as S from './styled'
import { setSelectedCategory } from "../../redux/Actions/categoryActions";
import { addProductToCart } from "../../redux/Actions/cartActions";
import WhiteCart from '../../images/white-cart.png'
import { getSelectedCurrencyIndex } from "../utils";

class ProductList extends PureComponent {
    constructor(props) {
        super(props)

        this.addProductWithDefaultAttributes = this.addProductWithDefaultAttributes.bind(this)
        this.renderProduct = this.renderProduct.bind(this)
        this.renderProducts = this.renderProducts.bind(this)

    }

    addProductWithDefaultAttributes(e, product) {
        e.preventDefault()
        const selectedAttributes = {}
        product.attributes.forEach(attribute => {
            selectedAttributes[attribute.name] = attribute.items[0].value
        })

        const newProduct = {}
        Object.assign(newProduct, product)
        newProduct['selectedAttributes'] = selectedAttributes
        newProduct['quantity'] = 1
        this.props.addProductToCart(newProduct)

    }

    renderProduct(product) {
        return (
            <S.ProductCard to={`/product/${product.id}`}>
                <S.ProductImage src={product.gallery[0]} />
                <S.ProductName>
                    {product.brand} {product.name}
                </S.ProductName>
                <S.ProductPrice key={this.props.selectedCurrency}>
                    {this.props.selectedCurrency?.symbol}
                    {product.prices[getSelectedCurrencyIndex(product, this.props.selectedCurrency)].amount}
                </S.ProductPrice>
                <S.AddToCartButton onClick={(e) => this.addProductWithDefaultAttributes(e, product)}>
                    <img src={WhiteCart} />
                </S.AddToCartButton>          
            </S.ProductCard>
        )
    }

    renderProducts() {
        return (
            this.props.products?.map(product => {
                return this.renderProduct(product)
            })
        )    
    }

    componentDidMount() {
        this.props.setSelectedCategory(this.props.category)
    }

    render() {
        return (
            <>
                <Header />
                <S.Container>
                    <S.CategoryTitle>
                        {this.props.category}
                    </S.CategoryTitle>
                    
                    <S.ProductsContainer>
                        {this.renderProducts()}
                    </S.ProductsContainer>
                </S.Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCurrency: state.currencyReducer.selectedCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedCategory: category => dispatch(setSelectedCategory(category)),
        addProductToCart: product => dispatch(addProductToCart(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

