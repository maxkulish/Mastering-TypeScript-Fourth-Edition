"use strict";
function concatValues(a, b) {
    console.log(`a + b = ${a} + ${b}`);
}
concatValues("hello");
concatValues("hello", "world");
concatValues("hello", undefined);
function testArguments(...args) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("hello", "world");
testArguments(1, 2, 3, 4, 5);
var myCallback = function (text) {
    console.log(`myCallback called with : ${text}`);
};
function withCallbackArg(message, callbackFn) {
    console.log(`withCallbackArg called with : ${message}`);
    callbackFn(`${message} from withCallback`);
}
withCallbackArg("hello", myCallback);
function add(a, b) {
    return a + b;
}
add("first", "second");
add(1, 2);
function withLiteral(input) {
    console.log(`withLiteral called with : ${input}`);
}
withLiteral("one");
withLiteral(1);
withLiteral("two");
withLiteral(2);
withLiteral("three");
withLiteral(3); // Error: Argument of type '3' is not assignable to parameter of type 'AllowedStringValues | AllowedNumericValues'.
//# sourceMappingURL=functions.js.map