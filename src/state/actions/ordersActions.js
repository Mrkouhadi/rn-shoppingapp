export const ADD_TO_ORDERS = 'ADD_TO_ORDERS';

export const addToOrders = (cartItems, totalAmount) =>{
    return{
        type:ADD_TO_ORDERS,
        orderData:{
            items:cartItems,
            amount:totalAmount,
        }
    }
}