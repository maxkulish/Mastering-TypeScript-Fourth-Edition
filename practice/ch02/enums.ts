
enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is: ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

var doorState: DoorState = DoorState.Closed;
checkDoorState(doorState);

enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed"
}

console.log(`OPEN = ${DoorStateString.OPEN}`);

const enum DoorStateconst {
    Open = 10,
    Closed = 20
}

console.log(`const Closed = ${DoorStateconst.Closed}`);

let array = ["123", "456", "789"];

delete array[0];

for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}

const value: number = 10;
const message: string = value > 10 ? "value is larger than 10" : "value is 10 or less";
console.log(message);

function printNestedObject(obj: any) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
            console.log(`name = ${obj.nestedProperty.name}`)
        } else {
            console.log(`name not found or undefined`);
        }
}

var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

printNestedObject(objectA);

function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    } else {
        console.log(`name not found or undefines`);
    }
}

printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});

function nullishCheck(a: number | null | undefined) {
    console.log(`a: ${a ?? `undefined or null`}`);
}

nullishCheck(null);
nullishCheck(undefined);
nullishCheck(10);