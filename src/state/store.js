import { createStore, combineReducers} from "redux";
import cartReducers from "./reducers/cartReducers";
import ordersReducers from "./reducers/ordersReducers";
import productsReducers from "./reducers/productsReducers";


const rootReducer = combineReducers({
    products : productsReducers,
    cartItems:cartReducers,
    orders:ordersReducers
})

export default createStore(rootReducer);