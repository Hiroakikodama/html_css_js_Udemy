const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
// btn.addEventListener('click', function () {
//   alert('hello');
// });
// 無名関数での書き方

// const hello = function () {
//   alert('hello');
// };
// btn.addEventListener('click', hello);
// btn.addEventListener('mouseenter', hello);
// btn.removeEventListener('click', hello);

// 違う動作で同じ関数を使いまわしたい時にいちいち書かないで済むので、関数は外だしの方がベター
// また登録したイベントを解除したい場合も、removeEventListenerの関数が必要になるので、外だしがベター

function changecolor() {
  btn.style.color = 'red';
  h1.style.color = 'blue';
};

function changeBgcolor() {
  h1.style.backgroundColor = 'green';
};

btn.addEventListener('click', changecolor);
btn.addEventListener('click', changeBgcolor);

// functionの中で定めたプロパティを関数の外に定義されているものにも適用できるので、例えば関数の中でh1のプロパティを定めたら、関数の外にあるh1に対してもプロパティを適用できる。

// イベントハンドラーという1つしか関数を登録できない方法もあるが、基本使わない
// htmlにイベントを定義し、関数を呼び出す方法もあるが、javascriptの記述がhtmlにあると管理できなくなるので、非推奨
