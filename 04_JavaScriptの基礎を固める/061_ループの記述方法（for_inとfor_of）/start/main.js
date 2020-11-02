const arry = [1, 2, 3, 4, 5, 6];

for (let i in arry) {
    console.log(i, arry[i]);
}

// console.log(i, arry[i]);でi = 添字、arry[i]=配列の要素を一括で取得することができる。
// (配列の0番目の要素は1、1番目の要素は2、、、というように)

for (let v of arry) {
    console.log(v);
}

// ofの場合は、console.log(v)で配列の値が取得できる。
// 変数名はi, j, kは添字の意味合いでよく使われる為、for of を使う時はvalueの意味のvを使うように。
