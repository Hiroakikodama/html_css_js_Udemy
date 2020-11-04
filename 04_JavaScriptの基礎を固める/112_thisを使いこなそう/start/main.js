document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});


class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
// 関数のあとに.bindメソッドでthisの値を束縛することができる。この場合、animateの中のthisとなり、animateの中のthis = TextAnimationとなる。
// const thatでthisを指定してもOK。結果は.bindと同じになる。
// thisは直近で囲まれているオブジェクトを参照する。なので、constractorの中で呼ばれたthisはインスタンス化されたtaをを指す
