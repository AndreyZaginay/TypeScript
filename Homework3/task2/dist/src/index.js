"use strict";
class MyStringCollection {
    constructor(...list) {
        this.values = list;
    }
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            if (!Number.isNaN(+this.values[i])) {
                throw new Error('Only strings must be in array');
            }
            yield this.values[i];
        }
    }
}
const list = new MyStringCollection('asdasd', 'asdasd', '12');
list.getValues().next();
list.getValues().next();
list.getValues().next();
