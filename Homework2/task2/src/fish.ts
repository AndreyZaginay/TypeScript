import { Animal } from "./animal";

 export class Fish implements Animal {
     name: string;
     can_fly: boolean;
     can_swin: boolean;

     constructor(name: string , can_fly: boolean, can_swin: boolean ) {

        this.name = name;
        this.can_fly = can_fly;
        this.can_swin = can_swin;
     }
     
     public move() : void {
        console.log("Floats in the water");
    }

    public showInfo(): void {
        console.log(`Name: ${this.name},can fly: ${this.can_fly}, can swim ${this.can_swin}`);
        
    };
    
}
