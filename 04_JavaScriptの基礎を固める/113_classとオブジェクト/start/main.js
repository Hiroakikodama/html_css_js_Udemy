const obj = {
  first_name: 'mafia',
  last_name: 'Code',
  printFullName: function () {
    console.log('hello');
  }
}
// オブジェクトとはプロパティがKey情報と値で対になってセットされているものを指す。オブジェクトには関数も登録できる。

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

console.log(obj.first_name);
obj.printFullName();
obj2.printFullName();

// クラスを用いて生成するobj2もオブジェクトである

// クラスというのはオブジェクトを生成する為の一つのまとまりであり、new演算子を用いてオブジェクトを生成することができる。
