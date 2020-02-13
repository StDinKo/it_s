export class Client {
    constructor(id, firstname, lastName, spentMoney = 0, buyProbactsCount = 0){
        this.id = id;
        this.firstname = firstname;
        this.lastName = lastName;
        this.spentMoney = spentMoney;
        this.buyProbactsCount = buyProbactsCount;
        this.buyProducts = [];
    };
};