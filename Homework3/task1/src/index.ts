import { Properties } from "./property";


const dictionary: Properties<number, string, string>[] = [];

function createRecord(position: number, name: string, description: string) {
    let entry = new Properties(position, name, description);
    entry.position = position;
    entry.name = name;
    entry.description = description;
    dictionary.push(entry);
    return dictionary;
}

createRecord(1,'js','prog');
createRecord(2,'js','prog');
createRecord(3,'js','prog');
console.log(dictionary);










