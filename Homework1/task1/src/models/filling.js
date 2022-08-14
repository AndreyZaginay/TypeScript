export class Filling {
    constructor(name, price) {
        this.Name = name;
        this.Price = price;
    }
    get name() {
        return this.Name;
    }
    get price() {
        return this.Price;
    }
}
