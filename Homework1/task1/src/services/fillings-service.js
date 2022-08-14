import { FillingPrice } from '../enums/filling-price';
import { Filling } from '../models/filling';
import { FillingName } from '../enums/filling-name';
export class FillingsService {
    constructor() {
        this.Fillings = [
            new Filling(FillingName.CHOCOLATE, FillingPrice.CHOCOLATE),
            new Filling(FillingName.CARAMEL, FillingPrice.CARAMEL),
            new Filling(FillingName.BERRIES, FillingPrice.BERRIES)
        ];
    }
    get fillings() {
        return this.Fillings;
    }
}
