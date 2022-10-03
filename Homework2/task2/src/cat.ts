import { Animal } from "./animal";

 export class Cat implements Animal {
     name: string;
     can_fly: boolean;
     can_swin: boolean;

     constructor(name: string , can_fly: boolean, can_swin: boolean ) {

        this.name = name;
        this.can_fly = can_fly;
        this.can_swin = can_swin;
     }
     
     public move() : void {
        console.log("Moves on the ground");
    }

    public makeSound():void {
        console.log('Myau myau')
    }

    public showInfo(): void {
        console.log(`Name: ${this.name},can fly: ${this.can_fly}, can swim ${this.can_swin}`);
        
    };
    
}
