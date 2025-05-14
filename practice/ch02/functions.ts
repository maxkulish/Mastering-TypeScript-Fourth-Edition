
function concatValues(a: string, b?: string)  {
    console.log(`a + b = ${a} + ${b}`);
}

concatValues("hello");
concatValues("hello", "world");
concatValues("hello", undefined);


function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}

testArguments("hello", "world");
testArguments(1, 2, 3, 4, 5);

var myCallback = function (text: string): void {
    console.log(`myCallback called with : ${text}`);
}

function withCallbackArg(message: string, callbackFn: (text: string) => void) {
    console.log(`withCallbackArg called with : ${message}`);
    callbackFn(`${message} from withCallback`);
}

withCallbackArg("hello", myCallback);

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

add("first", "second");
add(1, 2);

type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 2 | 3;

function withLiteral(input:
    AllowedStringValues | AllowedNumericValues) {
    console.log(`withLiteral called with : ${input}`);
}

withLiteral("one");
withLiteral(1);
withLiteral("two");
withLiteral(2);
withLiteral("three");
withLiteral(3); 