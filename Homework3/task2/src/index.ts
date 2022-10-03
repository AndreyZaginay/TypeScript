class MyStringCollection {

   private readonly values: string[];

    constructor(...list: string[]) {
        this.values = list;
    }

    *getValues(): Generator<string, void, unknown> {
            for(let i = 0; i < this.values.length; i++ ) {
                if (!Number.isNaN(+this.values[i])) {
                    throw new Error('Only strings must be in collection');
                }
                yield this.values[i];   
        }
    }
}

const list: Generator<string, void, unknown> = new MyStringCollection('name','secondname','12').getValues();


for (const item of list) {
    console.log(item);
}