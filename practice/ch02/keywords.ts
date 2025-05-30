let index: number = 0;

if (index == 0) {
  let index: number = 2;
  console.log(`index: ${index}`);
}

console.log(`index: ${index}`);


const constValue = "this should not be changed";

function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");

function addWithUnion(
  arg1: string | number,
  arg2: string | number
) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log(`args are numbers: sum = ${arg1}+${arg2}`);
    return arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    console.log(`arg1 and arg2 are strings: ${arg1} + ${arg2}`);
  }
}

addWithUnion("string1", "string2");
addWithUnion(1, 3);

type StringOrNumber = string | number;

function addWithTypeAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  return arg1.toString() + arg2.toString();
}

console.log(addWithTypeAlias(1, 2));
