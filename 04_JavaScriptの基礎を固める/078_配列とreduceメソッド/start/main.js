const arry = [1,2,3,4,5];

arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  // return accu * curr;
},10);

// accu + curr = 次のaccuとなる。前のループの戻り値がaccuに格納される。
// currには配列の要素が入る。

const str = 'animation';
const strArry = str.split('');
console.log(strArry);

const resule = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
}, "")
// `${accu}<${curr}>`はテンプレートリテラルと呼ばれる書き方
// ""を第一引数としてaccuに渡すことで、currにはaからが割り当てられ、全ての文字に<>をつけることができる。

console.log(resule);
