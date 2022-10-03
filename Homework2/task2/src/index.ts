import { Bird } from "./bird";
import { Cat } from "./cat";
import { Fish } from "./fish";

const cat: Cat = new Cat('Cat',false, true);
cat.showInfo();
cat.makeSound();
cat.move();

const bird: Bird = new Bird('Bird',true, true);
bird.showInfo();
bird.makeSound();
bird.move();

const fish: Fish = new Fish('fish',false, true);
fish.showInfo();
fish.move();
