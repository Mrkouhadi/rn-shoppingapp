import Order from "../../models/Orders";
import { ADD_TO_ORDERS } from "../actions/ordersActions";

const initialState = {
    orders:[],
}
export default (state=initialState, action)=>{
    switch (action.type) {
        case ADD_TO_ORDERS:
            const uniQueId = `${new Date().valueOf()}-${action.orderData.amount}`
            const newOrder = new Order( uniQueId,
                                        action.orderData.items,
                                        action.orderData.amount,
                                        new Date()
                                      )
           return {
               ...state,
               orders:state.orders.concat(newOrder),
           }
    }
    return state;
}