var Properties = (function () {
    function Properties(position, name, description) {
        this._position = position;
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Properties.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение value не может быть пустым.");
            }
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение value не может быть пустым.");
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение value не может быть пустым.");
            }
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    return Properties;
}());
export { Properties };
;
function createRecord() {
}
