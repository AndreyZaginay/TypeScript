import { FillingPrice } from '../enums/filling-price';
import { FillingName } from './../enums/filling-name';

export class Filling {
    private readonly Name: FillingName;
    private readonly Price: FillingPrice;

    constructor(name: FillingName, price: FillingPrice) {
        this.Name = name;
        this.Price = price;
    }

    get name(): FillingName {
        return this.Name;
    }

    get price(): FillingPrice {
        return this.Price;
    }
}