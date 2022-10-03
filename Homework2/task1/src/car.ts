export abstract class Car {
    protected factory: string;
    protected country: string;
    abstract model: string;
    abstract max_speed: number;
    
    constructor(factory: string, country: string) {
        this.factory = factory;
        this.country = country;
    }
}