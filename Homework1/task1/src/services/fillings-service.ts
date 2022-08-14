import { FillingPrice } from '../enums/filling-price';
import { Filling } from '../models/filling';
import { FillingName } from '../enums/filling-name';

export class FillingsService {
    private readonly Fillings: Filling[];

    constructor() {
        this.Fillings = [
            new Filling(FillingName.CHOCOLATE, FillingPrice.CHOCOLATE), 
            new Filling(FillingName.CARAMEL, FillingPrice.CARAMEL),
            new Filling(FillingName.BERRIES, FillingPrice.BERRIES)
        ];
    }
    
    get fillings(): Filling[] {
        return this.Fillings;
    }

    getFillingPrice(fillingName: FillingName): number {
        return this.Fillings.find((filling) => filling.name === fillingName)!.price
    }

    getFillingNames(): string[] {
        return this.Fillings.map(({ name }: Filling) => name)
    }
}