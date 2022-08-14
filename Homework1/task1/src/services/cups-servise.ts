import { CupPrice } from '../enums/cup-price';
import { CupSize } from '../enums/cup-size';
import { Cup } from '../models/cup';

export class CupsService {
    private readonly Cups: Cup[];

    constructor() {
        this.Cups = [
            new Cup(CupSize.SMALL, CupPrice.SMALL), 
            new Cup(CupSize.LARGE, CupPrice.LARGE)
        ];
    }
    
    get cups(): Cup[] {
        return this.Cups;
    }

    getCupPrice(cupSize: CupSize): number {
        return this.Cups.find((cup) => cup.size === cupSize)!.price
    }

    getSizes(): string[] {
        return this.Cups.map(({ size }: Cup) => size)
    }
}