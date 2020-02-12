import {Product} from './product.js';
import {Purchase} from './purchase.js';
import {Client} from './client.js';
import {Shop} from './shop.js';

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
