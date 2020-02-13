import {Product} from './product.js';
import {Client} from './client.js';
import {Shop} from './shop.js';


let client01 = new Client(1, 'Mary', 'Smit');
let client02 = new Client(2, 'Jon', 'Smit');

let product01 = new Product(1, 'Яблоко', 'Фрукты', 20),
 product02 = new Product(2, 'Яблоко', 'Фрукты', 20),
 product03 = new Product(3, 'Яблоко', 'Фрукты', 20),
 product04 = new Product(4, 'Яблоко', 'Фрукты', 20),
 product05 = new Product(5, 'Картошка', 'Овощи', 25),
 product06 = new Product(6, 'Картошка', 'Овощи', 25),
 product07 = new Product(7, 'Морковка', 'Овощи', 35),
 product08 = new Product(8, 'Морковка', 'Овощи', 35);

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
MyShop.addProduct(product08);

MyShop.sellProduct(client01, 'Картошка', 2);
MyShop.sellProduct(client01, 'Яблоко', 2);
MyShop.sellProduct(client02, 'Морковка', 1);
MyShop.sellProduct(client01, 'Морковка', 1);



console.log(MyShop.purchasedProductsCount());
console.log(MyShop.earnedMoney());
console.log(MyShop.productsCount());
console.log(MyShop.productsCountByType());
console.log(MyShop.purchasedSumByType());

console.log(MyShop);
console.log(client01);
console.log(client02);

console.log(client01.buyProducts);
console.log(client02.buyProducts);
