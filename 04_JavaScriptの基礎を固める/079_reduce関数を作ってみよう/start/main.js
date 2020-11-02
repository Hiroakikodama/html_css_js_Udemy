const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }
    return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);

// reduce関数は引数としてarry, callback, defaultValueを持っている。その引数に今回はstrArry, tag, ""を代入する。
// reduceの中でaccuに""を代入して、accu自体は""とする。currはstrに格納されているanimationという要素をsplitで1文字ずつ取り出して、
// tag関数のreturn `${accu}<${curr}>`;という戻り値で<a><n><i>...と文字の前後に＜＞をつけてる
// currで＜＞をつけた文字をaccuに蓄積して、最終的に全部の文字に＜＞をつけたところでreduceの戻り値としてaccuを設定することで、全部の文字に＜＞をつけて蓄積したaccuのみを出力している
