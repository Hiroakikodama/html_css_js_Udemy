// if(false) {
//   console.log('this is true');
// } else if(true) {
//   console.log('this is in else if block');
// } else {
//   console.log('this is false')
// }

if (1 == '1') {
  console.log('this is true');
} else {
  console.log('this is false');
}

if (1 === '1') {
  console.log('this is true');
} else {
  console.log('this is false');
}

if (1 == true) {
  console.log('this is true');
} else {
  console.log('this is false');
}

// == は、左辺と右辺のデータ型を考慮しない。=== はデータ型が一致しているかも考慮する
// trueは数字に置き換えると1となるので、1 == true は正となる。falseは0。

const num = 10;
const bool = Boolean(num);
console.log(bool);

if (0 !== '0') {
  console.log('this is true');
} else {
  console.log('this is false');
}

if (0 != '0') {
  console.log('this is true');
} else {
  console.log('this is false');
}

if (0 == '0' && 0 === '0') {
  console.log('this is true');
} else {
  console.log('this is false');
}
// 0 == '0'は型を考慮しないのでtrue。&& 0 === '0'はかつデータ型も一緒ならtrueという条件式の追加を示す。
// この場合は、0='0'かつデータ型も一緒ならtrueなので、出力結果はfalse

if (0 == '0' || 0 === '0') {
  console.log('this is true');
} else {
  console.log('this is false');
}
// ||は「または」を示す。0 == '0' または 0 === '0' のどちらかが正しければtrueを返す。

if (num) {
  console.log('this is true');
} else {
  console.log('this is false');
}

// Boolean型は数字が設定されていればtrueとなるが、0が設定されている、もしくは数字が設定されていない場合、falseとなる
