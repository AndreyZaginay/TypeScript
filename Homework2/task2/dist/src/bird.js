var Bird = (function () {
    function Bird(name, can_fly, can_swin) {
        this.name = name;
        this.can_fly = can_fly;
        this.can_swin = can_swin;
    }
    Bird.prototype.move = function () {
        console.log("Flies in the sky");
    };
    Bird.prototype.makeSound = function () {
        console.log('Chirik chirik');
    };
    Bird.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, ",can fly: ").concat(this.can_fly, ", can swim ").concat(this.can_swin));
    };
    ;
    return Bird;
}());
export { Bird };
