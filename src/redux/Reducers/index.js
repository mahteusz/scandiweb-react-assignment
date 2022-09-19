import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { currencyReducer } from "./currencyReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    categoryReducer,
    currencyReducer,
    productReducer,
    cartReducer
})

export default rootReducer