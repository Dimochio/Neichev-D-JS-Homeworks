function showTask1() {
  console.clear();
  const str = "Text";
  const num = 123;
  const obj = { key: "value" };
  const arr = [1, 2, 3];
  const undf = undefined;
  const nll = null;
  const bool = true;
  const symb = Symbol("$");
  const bigInt = 1234567n;
  const foo = function func() {
    console.log("this is func");
  };

  console.log(typeof str, str);
  console.log(typeof num, num);
  console.log(typeof undf, undf);
  console.log(typeof nll, nll);
  console.log(typeof obj, obj);
  console.log(typeof arr, arr);
  console.log(typeof bool, bool);
  console.log(typeof bigInt, bigInt);
  console.log(typeof symb, symb);
  console.log(typeof foo, foo);
}
