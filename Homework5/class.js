class Transport {
    constructor(weels) {
        this.weels = weels;
        this.streeringWheel = true;
    }
}
// class Auto extends Transport{
//     constructor(protected weels: number){
//         super();
//     }
// };
export class Car extends Transport {
    constructor(fabric, maxCurrentSpeed, weelsParam = 4) {
        super(weelsParam);
        this.fabric = fabric;
        this.currentSpeed = 0;
        this.colorCar = 'Black';
        this.door = true;
        this.drivers = [];
        this.maxSpeed = maxCurrentSpeed;
    }
    addDriver(login, key) {
        const driver = { user: login, key: key };
        this.drivers.push(driver);
        return driver;
    }
    get color() {
        return this.colorCar;
    }
    set color(newColor) {
        if (this.currentSpeed === 0) {
            this.colorCar = newColor;
        }
        else {
            console.log('Машина в движении');
        }
    }
    speedUp() {
        if (this.maxSpeed === this.currentSpeed) {
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
}
;
