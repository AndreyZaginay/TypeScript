import { CupPrice } from "../enums/cup-price";
import { CupSize } from "../enums/cup-size";

export class Cup {
    private readonly Size: CupSize;
    private readonly Price: CupPrice;

    constructor(size: CupSize, price: CupPrice) {
        this.Size = size;
        this.Price = price;
    }

    get size(): CupSize {
        return this.Size;
    }

    get price(): CupPrice {
        return this.Price;
    }
}