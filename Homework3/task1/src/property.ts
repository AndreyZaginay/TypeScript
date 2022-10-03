
 export class  Properties <TPosition, TName, TDescription> {
    private _position: TPosition;
    private _name: TName;
    private _description: TDescription;

    constructor(position: TPosition, name: TName, description: TDescription) {
        this._position = position;
        this._name = name;
        this._description = description;
    }

    public set position(value: TPosition) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._position = value;
    }

    public get position(): TPosition {
        return this._position;
    }

    public set name(value: TName) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._name = value;
    }

    public get name(): TName {
        return this._name;
    }

    public set description(value: TDescription) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._description = value;
    }

    public get description(): TDescription {
        return this._description;
    }
};




function createRecord() {
    
}