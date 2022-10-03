var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Car } from "./car";
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW(model, max_speed, seats, price) {
        var _this = _super.call(this, 'BMW', 'Germany') || this;
        _this.model = model;
        _this.max_speed = max_speed;
        _this.price = price;
        _this.seats = seats;
        return _this;
    }
    BMW.prototype.getInfo = function () {
        console.log("Country name:".concat(this.country, ",Factory:").concat(this.factory, ",model:").concat(this.model, ",seats: ").concat(this.seats, ", max speed:").concat(this.max_speed, "km/h, price:").concat(this.price, "$"));
    };
    return BMW;
}(Car));
export { BMW };
