import { Car } from "./class.js";
const car1 = new Car("BMW", 200);
car1.addDriver(11, 'andrey');
console.log(car1);
car1.speedUp();
car1.slowDown();
car1.color = 'grey';
console.log(car1);
