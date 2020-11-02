let hello = 'hello World';
console.log(hello.length);
// .lengthで取得できるデータがプロパティ。文字列の長さを取得することができる。

console.log(hello.toUpperCase());
// helloに格納されている変数が全て大文字でコンソールに出力される。.toUpperCaseのように特定の処理を行う指示をメソッドという。()で終わるものはメソッドと判断。

console.log(hello.substring(0, 5));
console.log(hello.slice(0,5));
// .substring、.sliceは与えられた数字の分だけ文字列を切り取る。エクセルのmid関数に似てる。

console.log(hello.split(' '));
console.log(hello.split(''));
// .splitは文字列を分割して表示することができる。’’だと1文字ずつに分割。' 'だとスペースで分割できる。
