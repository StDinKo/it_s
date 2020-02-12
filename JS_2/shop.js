class Client {
    constructor(id, firstname, lastName, spentMoney = 0){
        this.id = id;
        this.firstname = firstname;
        this.lastName = lastName;
        this.spentMoney = spentMoney;
    }
};
class Product {
    constructor(id, name, type, cost) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.cost = cost;
    }
};
class Purchase{
    constructor(productName, type, sum, amount = 1, createdAt  = new Date()){
        this.productName = productName;
        this.type = type;
        this.sum = sum;
        this.amount = amount;
        this.createdAt = createdAt;
    }
};

class Shop{
    constructor(){
        this.clients = [];
        this.products = [];
        this.purchases = [];
    }
    addClient(client){
        this.clients.push(client);
    };
    deleteClient(client){
        this.clients.forEach((item, i, clients) => {
            if (item.id == client.id) {
                clients.splice(i, 1);
            }
        });
    };
    addProduct(product){
        this.products.push(product);
    };
    deleteProduct(product){
        this.products.forEach((item, i, products) => {
            if (item.id == product.id) {
                products.splice(i, 1);
            }
        });
    };
    addPurchase(purchase){
        this.purchases.push(purchase);
    };
    sellProduct(client, productName, count){
        let productsToSell = this.products.filter(item => item.name == productName),
            infoProduct = productsToSell[0];

        if(!productsToSell)
            return `Товара ${productName} нет на скаладе!`;
        if(productsToSell.length < count)
            return `Недостаточное количество товара ${productName} на складе!`;
        
        productsToSell.splice(0, productsToSell.length - count);

        let sum = infoProduct.cost * count;

        productsToSell.forEach(p => {
            this.deleteProduct(p);
        });
        this.addPurchase(new Purchase(infoProduct.name, infoProduct.type, sum, count));
        client.spentMoney += sum;
    };
    purchasedProductsCount(){
        return this.purchases.map(p => p.amount).reduce((sum, i) => sum = i);
    };
    earnedMoney(){
        return this.clients.map(p => p.spentMoney).reduce((sum, i) => sum = i);
    };
    productsCount(){
        return this.products.length;
    };
    productsCountByType(){
        let result = {};
        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) +1; });
        return result;
    };
    purchasedSumByType(){
        let result = {};
        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) +p.sum; });
        return result;
    };
};
let client01 = new Client(1, 'Mary', 'Smit');
let client02 = new Client(2, 'Jon', 'Smit');

let product01 = new Product(1, 'Яблоко', 'Фрукты', 20),
 product02 = new Product(2, 'Яблоко', 'Фрукты', 20),
 product03 = new Product(3, 'Яблоко', 'Фрукты', 20),
 product04 = new Product(4, 'Яблоко', 'Фрукты', 20),
 product05 = new Product(5, 'Кортошка', 'Овощи', 20),
 product06 = new Product(6, 'Кортошка', 'Овощи', 20),
 product07 = new Product(7, 'Морковка', 'Овощи', 20);

const MyShop = new Shop();

MyShop.addClient(client01);
MyShop.addClient(client02);

MyShop.addProduct(product01);
MyShop.addProduct(product02);
MyShop.addProduct(product03);
MyShop.addProduct(product04);
MyShop.addProduct(product05);
MyShop.addProduct(product06);
MyShop.addProduct(product07);

MyShop.sellProduct(client01, 'Картошка', 2);
MyShop.sellProduct(client01, 'Яблоко', 1);

console.log(MyShop.purchasedProductsCount());
console.log(MyShop.earnedMoney());
console.log(MyShop.productsCount());
console.log(MyShop.productsCountByType());
console.log(MyShop.purchasedSumByType());

console.log(MyShop);
