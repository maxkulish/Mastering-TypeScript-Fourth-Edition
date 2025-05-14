"use strict";
function testNullOperands(a, b) {
    return a + (b ?? 0);
}
console.log(`testNullOperands(1, 2) = ${testNullOperands(1, 2)}`);
let structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject",
    },
};
function printObjectType(a) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structuredObject);
printObjectType({ name: "anotherObject" });
printObjectType([1, 2, 3]);
let a = "test";
let aNum = a;
aNum = a;
let u = "an unknown value";
u = 1;
u = "another value";
let aNum2;
aNum2 = u;
function alwaysThrows() {
    throw new Error("this will always throw");
}
// alwaysThrows();
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["First"] = 0] = "First";
    AnEnum[AnEnum["Second"] = 1] = "Second";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.First:
            return "First Case";
        case AnEnum.Second:
            return "Second Case";
        default:
            throw new Error("Invalid enum value");
    }
}
let firstObj = { id: 1, name: "firstObj" };
let secondObj = { ...firstObj, id: 2 };
console.log(`secondObj: ${JSON.stringify(secondObj)}`);
let obj3 = { ...firstObj, ...secondObj, id: 3 };
console.log(`thirdObj: ${JSON.stringify(obj3)}`);
let tuple1 = [1, "one"];
let tuple2 = [2, "two"];
let combinedTuple = [...tuple1, ...tuple2];
console.log(`combinedTuple: ${JSON.stringify(combinedTuple)}`);
let tupleOptional;
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional: ${JSON.stringify(tupleOptional)}`);
let complexObject = {
    aNumber: 1,
    bStr: "name",
    cBool: true,
    dArr: [1, 2, 3],
    eObj: { id: 1, name: "complexObject" },
    fFunc: (x) => x * 2,
    gNull: null,
    hUndefined: undefined,
    iBigInt: BigInt(12345678901234567890),
    jSymbol: Symbol("unique"),
    kDate: new Date(),
    lRegExp: /test/,
    mMap: new Map([["key", "value"]]),
    nSet: new Set([1, 2, 3]),
    oWeakMap: new WeakMap([[{}, "weakValue"]]),
    pWeakSet: new WeakSet([{}]),
    qArrayBuffer: new ArrayBuffer(8),
    rTypedArray: new Uint8Array([1, 2, 3]),
    sDataView: new DataView(new ArrayBuffer(8)),
};
let { aNumber, bStr, cBool } = complexObject;
console.log(`aNum: ${aNum}, bStr: ${bStr}, cBool: ${cBool}`);
//# sourceMappingURL=null-test.js.map