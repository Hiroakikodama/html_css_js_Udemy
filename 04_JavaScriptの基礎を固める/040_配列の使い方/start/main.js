const arry = [1, 2, 3, 4, 5, 6, 'moji', false];
// constで配列を定義していても、配列の中身は後から上書きできる。配列を新しい配列に置き換えることはできない。
// 配列は[]で定義する。数字だけではなく、文字列なども持つことができる。（できない言語もある。）
// arry[5] = 8;
// [n]のnを添字という。arryの六番目の文字を8に変更する指示を出している。

// arry.push('new item');
// .pushは配列の末尾に新しい要素を追加することができる
arry.unshift('new item');
// .unshiftは配列の先頭に新しい要素を追加できる

const val = arry.pop();
const val2 = arry.pop();
console.log(val2);
// .popは配列の末尾の要素を削除することができる
// constで関数を定義して、削除した値をconsole.log(val2)で出力することもできる

const val3 = arry.shift();
console.log(val3)
// .shiftは配列の先頭の要素を削除できる

console.log(arry);

// Javascriptは大文字と小文字を区別して認識する
