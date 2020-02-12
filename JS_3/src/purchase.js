export class Purchase{
    constructor(productName, type, sum, amount = 1, createdAt  = new Date()){
        this.productName = productName;
        this.type = type;
        this.sum = sum;
        this.amount = amount;
        this.createdAt = createdAt;
    }
};