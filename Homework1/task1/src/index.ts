import { FillingName } from './enums/filling-name';
import { CupSize } from './enums/cup-size';
import { CupsService } from "./services/cups-servise";
import { FillingsService } from "./services/fillings-service";

const cupsService: CupsService = new CupsService();
const fillingsService: FillingsService = new FillingsService();

function promptCupSize(): CupSize {
    return prompt(`Get cup size: ${cupsService.getSizes()}`, CupSize.SMALL)?.toLowerCase() as CupSize;
}

function getCupSize(): CupSize {
    let cupSize: CupSize = promptCupSize();
    while(!cupsService.getSizes().includes(cupSize)) {
        cupSize = promptCupSize();
    }
    return cupSize;
} 

function getCupPrice(): number {
    const cupSize: CupSize = getCupSize();
    return cupsService.getCupPrice(cupSize);
}

function promptFillingName(): FillingName {
    return prompt(`Get filling: ${fillingsService.getFillingNames()}`, FillingName.CHOCOLATE)?.toLowerCase() as FillingName;
}

function getFillingName(): FillingName {
    let fillingName: FillingName = promptFillingName();
    while(!fillingsService.getFillingNames().includes(fillingName)){
        fillingName = promptFillingName()
    }
    return fillingName;
}

function getFillingsPrice(): number {
    let isAdding = true;
    let totalFillingPrice = 0;
    while(isAdding) {
        totalFillingPrice += fillingsService.getFillingPrice(getFillingName());
        isAdding = confirm('Add more fillings?');
    }
    return totalFillingPrice;
}

function getMarshmelloPrice(): number {
    return confirm('Add marshmello?') ? 5 : 0;
}

const cupPrice = getCupPrice();
const fillingPrice: number = getFillingsPrice();
const marshmelloPrice: number = getMarshmelloPrice();
const totalPrice: number =  cupPrice + fillingPrice + marshmelloPrice;
alert(`To pay ${totalPrice} HRN UA`);