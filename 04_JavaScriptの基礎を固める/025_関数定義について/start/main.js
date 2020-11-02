const hello = function hello(name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age;
}
// 変数に関数を代入する時は、関数より前に変数を定義しなければエラーになる。

// function hello(name, age) {
//   // let name = 'Code Mafia';
//   console.log('hello ' + name + age);
//   return name + age;
// }
// 関数名を持たない関数を無名関数もしくはアノニマスファンクションという。コールバック関数という所でたびたび出てくる。
// 無名関数は関数の定義が後に来てもエラーにならない。


// 変数をどんどん変えて行きたい場合は関数を使用する

hello('Code Mafia', 10);
const returnVal = hello('Code Mafia2', 20);
console.log(returnVal)

// 丸カッコの中に変数を格納することで、関数の変数を指定し、関数を使用することができる。引数は複数設定できる。
// 関数に渡す変数を引数、関数から返される結果を戻り値という。
