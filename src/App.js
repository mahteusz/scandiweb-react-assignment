import { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setCategories, setSelectedCategory } from './redux/Actions/categoryActions'
import { setCurrencies } from './redux/Actions/currencyActions';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getCategoriesAndProducts, getCurrencies } from './Queries';
import ProductList from './components/ProductList';
import { setProducts } from './redux/Actions/productActions';
import ProductPage from './components/ProductPage'
import Cart from './components/Cart';

class App extends PureComponent {

  componentDidMount() {
    getCategoriesAndProducts()
      .then(res => {
        const products = []
        res.categories.forEach(category => {
          category.products.forEach(product => {
            if(!products.find(savedProd => {
              return savedProd.id === product.id
            })) {
              products.push(product)
            }
          })
        })
        this.props.setProducts(products)
        this.props.setCategories(res.categories)
        this.props.setSelectedCategory(this.props.categories[0].name)
      })

    getCurrencies()
      .then(res => {
        this.props.setCurrencies(res.currencies)
      })
    
  }

  //TO-DO
  // => SHOW NUMBER OF ITEMS IN CART
  // => CUSTOM SCROLLBAR ON MINICART
  // => MESSAGE WHEN CART/MINICART IS EMPTY
  // => POP UP WHEN PRODUCT IS ADDED TO CART/OPEN CART???
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {
            this.props.categories &&
            <Route path="/" exact element={<Navigate to={`category/${this.props.categories[0].name}`} />} />
          }
          {
            this.props.categories?.map((category) => {
                return (
                  <Route
                      path={`category/${category.name}`}
                      element={<ProductList category={category.name} products={category.products}/>}
                      key={category.name}
                    />
                )
            })
            
          }
          {
            this.props.products?.map(product => {
              return (
                <Route
                  path={`product/${product.id}`}
                  element={<ProductPage product={product} />}
                />
              )
            })
          }
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories,
    products: state.productReducer.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCategories: categories => dispatch(setCategories(categories)),
    setCurrencies: currencies => dispatch(setCurrencies(currencies)),
    setSelectedCategory: category => dispatch(setSelectedCategory(category)),
    setProducts: products => dispatch(setProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
