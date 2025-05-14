"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
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
var doorState = DoorState.Closed;
checkDoorState(doorState);
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "Open";
    DoorStateString["CLOSED"] = "Closed";
})(DoorStateString || (DoorStateString = {}));
console.log(`OPEN = ${DoorStateString.OPEN}`);
console.log(`const Closed = ${20 /* DoorStateconst.Closed */}`);
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}
const value = 10;
const message = value > 10 ? "value is larger than 10" : "value is 10 or less";
console.log(message);
function printNestedObject(obj) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
printNestedObject(objectA);
function printNestedOptionalChain(obj) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
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
function nullishCheck(a) {
    console.log(`a: ${a ?? `undefined or null`}`);
}
nullishCheck(null);
nullishCheck(undefined);
nullishCheck(10);
//# sourceMappingURL=enums.js.map