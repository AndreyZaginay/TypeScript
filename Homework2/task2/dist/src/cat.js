var Cat = (function () {
    function Cat(name, can_fly, can_swin) {
        this.name = name;
        this.can_fly = can_fly;
        this.can_swin = can_swin;
    }
    Cat.prototype.move = function () {
        console.log("Moves on the ground");
    };
    Cat.prototype.makeSound = function () {
        console.log('Myau myau');
    };
    Cat.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, ",can fly: ").concat(this.can_fly, ", can swim ").concat(this.can_swin));
    };
    ;
    return Cat;
}());
export { Cat };
