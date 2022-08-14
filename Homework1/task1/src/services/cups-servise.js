import { CupPrice } from '../enums/cup-price';
import { CupSize } from '../enums/cup-size';
import { Cup } from '../models/cup';
export class CupsService {
    constructor() {
        this.Cups = [
            new Cup(CupSize.SMALL, CupPrice.SMALL),
            new Cup(CupSize.LARGE, CupPrice.LARGE)
        ];
    }
    get cups() {
        return this.Cups;
    }
}
