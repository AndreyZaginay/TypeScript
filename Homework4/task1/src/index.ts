import { BMW } from "./bmw";
import { Mercedes } from "./mercedes";
import { Porsche } from "./porsche";

const x5: BMW = new BMW('x5',120,5, 75000);
const M2: BMW = new BMW('M2',280,5,100000);
x5.getInfo();
M2.getInfo();

const AMG_SClass: Mercedes = new Mercedes('AMG S-Class', 250,4, 140721.67);
const AMG_G_63: Mercedes = new Mercedes('AMG G 63',210,5,160000);
AMG_SClass.getInfo();
AMG_G_63.getInfo();

const Porsche911: Porsche = new Porsche('Porsche911',330,2,131341);
const Taycan: Porsche = new Porsche('Taycan' ,260 ,4 ,82510);
Porsche911.getInfo();
Taycan.getInfo();