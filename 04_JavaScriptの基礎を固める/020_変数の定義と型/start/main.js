// var, let, constで変数を指定できる。
// letは上書きできる。constは上書きできない。varは使わない。

let name = 'Tom';
name = 'Tim';
console.log('Hello ' + name);

// Number, string, Boolean, undefined, null, Symbolなどがある。
// 変数が格納された時点でデータ型が決定される。数字が入ればNumber,文字ならstring,true/falseならBooleanなど。
// このような言語を動的型付け言語という。Javascriptは動的型付け言語。
// 反対に静的型付け言語は予めデータ型を決定し、その型が変更されることはない。Javaなどは静的型付け言語。

let variable = 'str';
variable = 12;
variable = false;
variable = undefined;

console.log(typeof variable);

// 静的型付け言語
// int num = 12;
