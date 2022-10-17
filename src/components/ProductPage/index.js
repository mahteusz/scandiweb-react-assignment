import { PureComponent } from 'react'
import * as S from './styled'
import Header from '../Header'
import { connect } from "react-redux";
import { Markup } from 'interweave';
import { addProductToCart } from '../../redux/Actions/cartActions';
import { getSelectedCurrencyIndex } from '../utils/cart';

class ProductPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mainImg: this.props.product.gallery[0],
            selectedAttributes: {}
        }
        this.renderTextAttribute = this.renderTextAttribute.bind(this)
        this.renderSwatchAttribute = this.renderSwatchAttribute.bind(this)
        this.renderGallerySelector = this.renderGallerySelector.bind(this)
        this.renderProductInfo = this.renderProductInfo.bind(this)
        this.renderProductAttributes = this.renderProductAttributes.bind(this)
        this.setMainImg = this.setMainImg.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleAddProductToCart = this.handleAddProductToCart.bind(this)

    }

    renderTextAttribute(item, attribute) {

        return (
            <>
                <S.AttributeTextRadioButton
                    type="radio"
                    id={attribute.name + item.value}
                    value={item.value}
                    name={attribute.name}
                    onChange={() => this.handleRadioChange(attribute.name, item.value)}
                />
                <S.AttributeTextLabel htmlFor={attribute.name + item.value}>
                    <S.AttributeTextContent>
                        {item.value}
                    </S.AttributeTextContent>
                </S.AttributeTextLabel>
            </>
        )
    }

    renderSwatchAttribute(item, attribute) {
        return (
            <>
                <S.AttributeSwatchRadioButton
                    type="radio"
                    value={item.value}
                    id={attribute.name + item.value}
                    name={attribute.name}
                    onChange={() => this.handleRadioChange(attribute.name, item.value)}
                />

                <S.AttributeSwatchLabel
                    htmlFor={attribute.name + item.value}
                    color={item.value}
                />
            </>
        )
    }

    renderGallerySelector() {
        return (
            <S.GallerySelectorContainer>
                {
                    this.props.product.gallery.map(image => {
                        return (
                            <S.GalleryImage
                                src={image}
                                onClick={(e) => this.setMainImg(e.target.src)} />
                        )
                    })
                }
            </S.GallerySelectorContainer>
        )
    }

    renderProductAttributes() {
        return (
            this.props.product.attributes.map(attribute => {
                return (
                    <>
                        <S.AttributeName>
                            {attribute.name}:
                        </S.AttributeName>
                        <S.AttributesItemsContainer>
                            {
                                attribute.items.map(item => {
                                    if (attribute.type === 'swatch') {
                                        return this.renderSwatchAttribute(item, attribute)

                                    } else {
                                        return this.renderTextAttribute(item, attribute)
                                    }
                                })
                            }
                        </S.AttributesItemsContainer>
                    </>
                )
            })
        )
    }

    renderProductInfo() {
        return (
            <S.InfoDiv>
                <S.ProductBrand>
                    {this.props.product.brand}
                </S.ProductBrand>
                <S.ProductName>
                    {this.props.product.name}
                </S.ProductName>

                {this.renderProductAttributes()}
                <S.AttributeName>
                    Price:
                </S.AttributeName>
                <S.Price>
                    {this.props.selectedCurrency.symbol}
                    {this.props.product.prices[getSelectedCurrencyIndex(this.props.product, this.props.selectedCurrency)].amount}
                </S.Price>
                {
                    this.props.product.inStock ?
                    <S.AddToCartButton
                        type="submit"
                        onClick={(e) => this.handleAddProductToCart(e)}
                        disabled={
                            Object.keys(this.state.selectedAttributes).length !==
                            this.props.product.attributes.length
                        }>
                        Add to cart
                    </S.AddToCartButton>
                    :
                    <S.OutOfStock>out of stock</S.OutOfStock>
                }
                
                <Markup content={this.props.product.description} />
            </S.InfoDiv>
        )
    }

    handleRadioChange(attribute, value) {
        this.setState({
            ...this.state,
            selectedAttributes: { ...this.state.selectedAttributes, [attribute]: value }
        })
    }

    handleAddProductToCart(e) {
        e.preventDefault()
        this.props.addProductToCart({
            ...this.props.product,
            selectedAttributes:this.state.selectedAttributes,
            quantity: 1
        })
    }

    setMainImg(imgSrc) {
        this.setState({ mainImg: imgSrc })
    }

    render() {
        return (
            <>
                <Header />
                <S.Container>
                    {this.renderGallerySelector()}

                    <S.MainImageContainer>
                        <S.MainImage src={this.state.mainImg} />
                    </S.MainImageContainer>

                    {this.renderProductInfo()}
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
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
