export class Cup {
    constructor(size, price) {
        this.Size = size;
        this.Price = price;
    }
    get size() {
        return this.Size;
    }
    get price() {
        return this.Price;
    }
}
