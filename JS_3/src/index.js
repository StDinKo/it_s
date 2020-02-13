/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\nclass Client {\r\n    constructor(id, firstname, lastName, spentMoney = 0, buyProbactsCount = 0){\r\n        this.id = id;\r\n        this.firstname = firstname;\r\n        this.lastName = lastName;\r\n        this.spentMoney = spentMoney;\r\n        this.buyProbactsCount = buyProbactsCount;\r\n        this.buyProducts = [];\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.js */ \"./src/product.js\");\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.js */ \"./src/client.js\");\n/* harmony import */ var _shop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.js */ \"./src/shop.js\");\n\r\n\r\n\r\n\r\n\r\nlet client01 = new _client_js__WEBPACK_IMPORTED_MODULE_1__[\"Client\"](1, 'Mary', 'Smit');\r\nlet client02 = new _client_js__WEBPACK_IMPORTED_MODULE_1__[\"Client\"](2, 'Jon', 'Smit');\r\n\r\nlet product01 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](1, 'Яблоко', 'Фрукты', 20),\r\n product02 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](2, 'Яблоко', 'Фрукты', 20),\r\n product03 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](3, 'Яблоко', 'Фрукты', 20),\r\n product04 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](4, 'Яблоко', 'Фрукты', 20),\r\n product05 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](5, 'Картошка', 'Овощи', 25),\r\n product06 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](6, 'Картошка', 'Овощи', 25),\r\n product07 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](7, 'Морковка', 'Овощи', 35),\r\n product08 = new _product_js__WEBPACK_IMPORTED_MODULE_0__[\"Product\"](8, 'Морковка', 'Овощи', 35);\r\n\r\nconst MyShop = new _shop_js__WEBPACK_IMPORTED_MODULE_2__[\"Shop\"]();\r\n\r\n\r\n\r\nMyShop.addClient(client01);\r\nMyShop.addClient(client02);\r\n\r\nMyShop.addProduct(product01);\r\nMyShop.addProduct(product02);\r\nMyShop.addProduct(product03);\r\nMyShop.addProduct(product04);\r\nMyShop.addProduct(product05);\r\nMyShop.addProduct(product06);\r\nMyShop.addProduct(product07);\r\nMyShop.addProduct(product08);\r\n\r\nMyShop.sellProduct(client01, 'Картошка', 2);\r\nMyShop.sellProduct(client01, 'Яблоко', 2);\r\nMyShop.sellProduct(client02, 'Морковка', 1);\r\nMyShop.sellProduct(client01, 'Морковка', 1);\r\n\r\n\r\n\r\nconsole.log(MyShop.purchasedProductsCount());\r\nconsole.log(MyShop.earnedMoney());\r\nconsole.log(MyShop.productsCount());\r\nconsole.log(MyShop.productsCountByType());\r\nconsole.log(MyShop.purchasedSumByType());\r\n\r\nconsole.log(MyShop);\r\nconsole.log(client01);\r\nconsole.log(client02);\r\n\r\nconsole.log(client01.buyProducts);\r\nconsole.log(client02.buyProducts);\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\nclass Product {\r\n    constructor(id, name, type, cost) {\r\n        this.name = name;\r\n        this.type = type;\r\n        this.id = id;\r\n        this.cost = cost;\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/product.js?");

/***/ }),

/***/ "./src/purchase.js":
/*!*************************!*\
  !*** ./src/purchase.js ***!
  \*************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Purchase\", function() { return Purchase; });\nclass Purchase{\r\n    constructor(productName, type, sum, amount = 1, createdAt  = new Date()){\r\n        this.productName = productName;\r\n        this.type = type;\r\n        this.sum = sum;\r\n        this.amount = amount;\r\n        this.createdAt = createdAt;\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/purchase.js?");

/***/ }),

/***/ "./src/shop.js":
/*!*********************!*\
  !*** ./src/shop.js ***!
  \*********************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shop\", function() { return Shop; });\n/* harmony import */ var _purchase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.js */ \"./src/purchase.js\");\n\r\nclass Shop{\r\n    constructor(){\r\n        this.clients = [];\r\n        this.products = [];\r\n        this.purchases = [];\r\n    }\r\n    addClient(client){\r\n        this.clients.push(client);\r\n    };\r\n    deleteClient(client){\r\n        this.clients.forEach((item, i, clients) => {\r\n            if (item.id == client.id) {\r\n                clients.splice(i, 1);\r\n            }\r\n        });\r\n    };\r\n    addProduct(product){\r\n        this.products.push(product);\r\n    };\r\n    deleteProduct(product){\r\n        this.products.forEach((item, i, products) => {\r\n            if (item.id == product.id) {\r\n                products.splice(i, 1);\r\n            }\r\n        });\r\n    };\r\n    addPurchase(purchase){\r\n        this.purchases.push(purchase);\r\n    };\r\n    sellProduct(client, productName, count){\r\n        let productsToSell = this.products.filter(item => item.name == productName),\r\n            infoProduct = productsToSell[0];\r\n\r\n        if(!productsToSell)\r\n            return `Товара ${productName} нет на скаладе!`;\r\n        if(productsToSell.length < count)\r\n            return `Недостаточное количество товара ${productName} на складе!`;\r\n        \r\n        productsToSell.splice(0, productsToSell.length - count);\r\n\r\n        let sum = infoProduct.cost * count;\r\n        \r\n        productsToSell.forEach(p => {\r\n            this.deleteProduct(p);\r\n        });\r\n        this.addPurchase(new _purchase_js__WEBPACK_IMPORTED_MODULE_0__[\"Purchase\"](infoProduct.name, infoProduct.type, sum, count));\r\n        client.spentMoney += sum;\r\n        client.buyProbactsCount += count;\r\n        client.buyProducts.push(productName,count);\r\n        \r\n    };\r\n    purchasedProductsCount(){\r\n        return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);\r\n    };\r\n    earnedMoney(){\r\n        return this.clients.map(p => p.spentMoney).reduce((sum, i) => sum + i);\r\n    };\r\n    productsCount(){\r\n        return this.products.length;\r\n    }; \r\n    productsCountByType(){\r\n        let result = {};\r\n        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) +1; });\r\n        return result;\r\n    };\r\n    purchasedSumByType(){\r\n        let result = {};\r\n        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) +p.sum; });\r\n        return result;\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/shop.js?");

/***/ })

/******/ });