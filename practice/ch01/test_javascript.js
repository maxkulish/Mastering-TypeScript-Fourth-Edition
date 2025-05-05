var test = "a string";
console.log("test = " + test);

test = 1;
console.log("test = " + test);

test = function (a, b) {
  return a + b;
};
console.log("test = " + test);
console.log("test(1, 2) = " + test(1, 2));
