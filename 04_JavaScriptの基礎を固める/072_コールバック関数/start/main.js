// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'Code Mafia';
// }

// const getFirstName = function (name) {
//   return 'Code' + name;
// }

// hello(getFirstName, 'Mafia');

// hello(function (name) {
//   return 'Code' + name;
// }, 'Mafia');
// // helloという関数の第一引数にfunction以下の関数を渡している。

// // hello(() => 'Code');
// // 上記の無名関数をアロー関数に変換した場合、このようになる。


function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

doSomething(2, 2, multiply);

function plus(a, b) {
  return a + b;
}

doSomething(2, 3, plus);
