import { Car } from "./car";

export class  Porsche extends Car {
    model: string;
    max_speed: number;
    private seats: number;
    private price: number;  

    constructor(model: string, max_speed: number, seats: number, price: number) {
        super('Porsche', 'Germany');
        this.model = model;
        this.max_speed = max_speed;
        this.price = price;
        this.seats = seats;
    }

    public getInfo(): void {
        console.log(`Country name:${this.country},Factory:${this.factory},model:${this.model},seats: ${this.seats}, max speed:${this.max_speed}km/h, price:${this.price}$`);
    }
    
}