import moment from 'moment'

class Order{
    constructor(id, items, totalAmount, date){
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }
    get readableDate(){
        // return this.date.toLocaleDateString('en-EN',{
        //                                         year:'numeric',
        //                                         month:'long',
        //                                         day:'numeric',
        //                                         hour:'2-digit',
        //                                         minute:'2-digit'
        //                                     }) // i removed it because it doesn't work on ANDROID,
        return moment(this.date).format("MMMM Do YYYY, hh:mm");  // this is a better way which works on both platforms OS
    }
}
export default Order;