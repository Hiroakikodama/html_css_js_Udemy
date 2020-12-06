const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);
        const _that = this;
        // 何もなければthisはobjオブジェクトを参照

        window.setTimeout(function () {
            console.log(this);
            // 何もなければthisはwindowオブジェクトを参照
        }.bind({ first_name: 'Taro' }));
        // .bindメソッドで中身を上書きすることができる。
    }
}

obj.printFullName();
