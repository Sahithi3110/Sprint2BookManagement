export class Bookorder {
    orderId:number | undefined;
    customerId:number | undefined;
    orderDate:Date | undefined;
    orderTotal:number | undefined;
    recipientName:string | undefined;
    recipientPhone:string | undefined;
    paymentMethod:string | undefined;
    status:string|undefined;
    address:string|undefined;
    constructor(orderId:number,customerId:number,orderDate:Date,orderTotal:number, recipientName:string,
        recipientPhone:string , paymentMethod:string,address:string,status:string ){}
}
