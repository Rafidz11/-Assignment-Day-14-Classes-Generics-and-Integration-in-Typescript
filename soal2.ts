class Product<T> {
    private readonly items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }
    getItems(): T[] {
        return  this.items;
    }
}

const stringProduct = new Product<string>();
stringProduct.addItem("2");
stringProduct.addItem("1");
console.log(stringProduct.getItems());
