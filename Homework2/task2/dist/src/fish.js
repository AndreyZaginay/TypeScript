var Fish = (function () {
    function Fish(name, can_fly, can_swin) {
        this.name = name;
        this.can_fly = can_fly;
        this.can_swin = can_swin;
    }
    Fish.prototype.move = function () {
        console.log("Floats in the water");
    };
    Fish.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, ",can fly: ").concat(this.can_fly, ", can swim ").concat(this.can_swin));
    };
    ;
    return Fish;
}());
export { Fish };
