function testNullOperands(a: number, b: number | null | undefined) {
  return a + (b ?? 0);
}

console.log(`testNullOperands(1, 2) = ${testNullOperands(1, 2)}`);

let structuredObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject",
  },
};

function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);
printObjectType({ name: "anotherObject" });
printObjectType([1, 2, 3]);

let a: any = "test";
let aNum: number = a;
aNum = a;

let u: unknown = "an unknown value";
u = 1;
u = "another value";
let aNum2: number;
aNum2 = <number>u;

function alwaysThrows(): never {
  throw new Error("this will always throw");
}

// alwaysThrows();

enum AnEnum {
  First,
  Second,
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.First:
      return "First Case";
    case AnEnum.Second:
      return "Second Case";
    default:
      throw new Error("Invalid enum value");
  }
}

let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj, id: 2 };

console.log(`secondObj: ${JSON.stringify(secondObj)}`);

let obj3 = { ...firstObj, ...secondObj, id: 3 };
console.log(`thirdObj: ${JSON.stringify(obj3)}`);

let tuple1: [number, string] = [1, "one"];
let tuple2: [number, string] = [2, "two"];

let combinedTuple = [...tuple1, ...tuple2];
console.log(`combinedTuple: ${JSON.stringify(combinedTuple)}`);

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional: ${JSON.stringify(tupleOptional)}`);

type ComplexObject = {
  aNumber: number;
  bStr: string;
  cBool: boolean;
  dArr: number[];
  eObj: { id: number; name: string };
  fFunc: (x: number) => number;
  gNull: null;
  hUndefined: undefined;
  iBigInt: bigint;
  jSymbol: symbol;
  kDate: Date;
  lRegExp: RegExp;
  mMap: Map<string, string>;
  nSet: Set<number>;
  oWeakMap: WeakMap<object, string>;
  pWeakSet: WeakSet<object>;
  qArrayBuffer: ArrayBuffer;
  rTypedArray: Uint8Array;
  sDataView: DataView;
};

let complexObject: ComplexObject = {
  aNumber: 1,
  bStr: "name",
  cBool: true,
  dArr: [1, 2, 3],
  eObj: { id: 1, name: "complexObject" },
  fFunc: (x: number) => x * 2,
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
}

let { aNumber, bStr, cBool } = complexObject;
console.log(`aNum: ${aNum}, bStr: ${bStr}, cBool: ${cBool}`);