import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/Products';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/productsActions';

const initialState = {
    availableProducts:PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
};

export default (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_PRODUCT:
            const newProd = new Product( new Date().valueOf(),'u1', action.itemData.title,
                                         action.itemData.imageUrl, action.itemData.description,
                                         action.itemData.price
                                        );
        return {
            ...state,
            availableProducts:[...state.availableProducts, newProd],
            userProducts:[...state.userProducts, newProd]
        }

        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(prod => prod.id === action.pid);
            const updatedProduct = new Product( action.pid, state.userProducts[productIndex].ownerId,
                                            action.itemData.title,
                                            action.itemData.imageUrl, action.itemData.description,
                                            state.userProducts[productIndex].price
                                          );
            const updatedUserProds = [...state.userProducts];
            updatedUserProds[productIndex] = updatedProduct;
            const availableProductsIndex = state.availableProducts.findIndex(prod =>prod.id === action.pid)
            const updatedAvailableProducts = [...state.availableProducts];
            updatedAvailableProducts[availableProductsIndex] = updatedProduct;

            return {
                ...state,
                availableProducts:updatedAvailableProducts,
                userProducts:updatedUserProds
            }
        case DELETE_PRODUCT:
                return {
                    ...state,
                    availableProducts:state.availableProducts.filter(pro=> pro.id !== action.productId),
                    userProducts:state.userProducts.filter(pro=> pro.id !== action.productId)
                }
    }
    return state;
}
