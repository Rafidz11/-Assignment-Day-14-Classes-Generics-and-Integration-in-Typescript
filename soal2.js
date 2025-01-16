var Product = /** @class */ (function () {
    function Product() {
        this.items = [];
    }
    Product.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Product.prototype.getItems = function () {
        return this.items;
    };
    return Product;
}());
var stringProduct = new Product();
stringProduct.addItem("2");
stringProduct.addItem("1");
console.log(stringProduct.getItems());
