import {  appearanceCar, Drivers } from "./interface.js";

abstract class Transport {
    abstract speedUp(): void;
    abstract slowDown(): void;
    protected abstract currentSpeed: number;
    constructor(protected weels: number) {}
    public readonly streeringWheel: boolean = true;
}

// class Auto extends Transport{
//     constructor(protected weels: number){
//         super();
//     }
// };


export class Car extends Transport implements appearanceCar {
   protected currentSpeed: number = 0;
   private maxSpeed: number;
   private colorCar: string = 'Black';
   public door = true;
   private drivers: Drivers[] = []; 
    constructor(
          public readonly fabric: string,
          maxCurrentSpeed: number,
          weelsParam: number = 4) 
          {
          super(weelsParam);
          this.maxSpeed = maxCurrentSpeed;
    }

    addDriver<TiD, TValue>(login: TiD, key: TValue) {
        const driver =  {user: login, key: key};
        this.drivers.push(driver);
        return driver;
    }

    get color() {
        return this.colorCar;
    }

    set color(newColor: string) {
        if (this.currentSpeed === 0) {
            this.colorCar = newColor
        } else {
            console.log('Машина в движении');
            
        }
    }
    speedUp() {
        if(this.maxSpeed === this.currentSpeed) {
            console.log('Max speed');
            return;
        }
        this.currentSpeed += 10;
        console.log(this.currentSpeed);
    }

    slowDown() {
        if (this.currentSpeed === 0) {
            console.log('Car stopped');
            return;
        }
        this.currentSpeed -= 10;
    }
};