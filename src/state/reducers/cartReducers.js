import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cartActions";
import CartItems from '../../models/CartItems';
import { ADD_TO_ORDERS } from "../actions/ordersActions";
import { DELETE_PRODUCT } from "../actions/productsActions";

const initialState = {
    items:{},
    totalAmount:0
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const addedProd = action.product;
            const prodTitle = addedProd.title;
            const prodPrice = addedProd.price;
            let updatedCartItem;

            if(state.items[addedProd.id]){
                updatedCartItem = new CartItems(
                                            state.items[addedProd.id].quantity + 1, 
                                            prodTitle, 
                                            prodPrice,
                                            state.items[addedProd.id].sum + prodPrice,
                                        );
            }else{
                updatedCartItem = new CartItems( 1, prodTitle, prodPrice, prodPrice);
            }
            return {
                ...state, 
                items:{
                    ...state.items, [addedProd.id]:updatedCartItem
                },
                totalAmount: state.totalAmount + prodPrice
            }

        case DELETE_FROM_CART :
            const selectedItem = state.items[action.productId]
            const currentQty = selectedItem.quantity;
            let updatedItems;
            if(currentQty > 1){
              const newItem = new CartItems(
                selectedItem.quantity - 1,
                selectedItem.productTitle,
                selectedItem.productPrice,
                selectedItem.sum - selectedItem.productPrice
              );
             updatedItems = {...state.items, [action.productId]:newItem};
            }else{
                updatedItems = {...state.items};
                delete updatedItems[action.productId];
            }
            return {
                ...state,
                items:updatedItems,
                totalAmount:state.totalAmount - selectedItem.productPrice
            };

        case ADD_TO_ORDERS:
            return initialState;
        case DELETE_PRODUCT:
            if(!state.items[action.productId]) return state;
            const updatedCartProducts = {...state.items};
            const productTotal = state.items[action.productId].sum;
            delete updatedCartProducts[action.productId];

            return {
                ...state,
                items:updatedCartProducts,
                totalAmount:state.totalAmount - productTotal,
            }
    }
    return state;
};