const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        const fn = function() {
            console.log(obj.first_name);
        };
        window.setTimeout(fn);
    }
}
// thisはオブジェクトを参照するキーワード。this.first_name=obj.first_nameとなる。
// クラス表記ではthisは使えない。new演算子で初期化してからなら使える。
// thisは上に上がって行った時に一番はじめに見つかるオブジェクトを参照する。

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }
    // クラス演算子の中のthisは生成されるオブジェクトを参照する。直近で見つかるオブジェクトを参照すると覚える。

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();
