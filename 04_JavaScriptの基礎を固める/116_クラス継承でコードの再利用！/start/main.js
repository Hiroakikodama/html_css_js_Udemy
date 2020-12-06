document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
    // ta.animate();はオブジェクトのメソッドとして実行される
    // コールバック関数としてメソッドを渡す場合は、ta.animateは関数として実行される。ta.animate.bind(ta)は無視され、直近のオブジェクトであるbtnがthisに参照される。
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
// ほとんどの機能が同じクラスを複数作成しすると効率が悪く、変更にも手間がかかる。その為クラス継承で記述量を減らす。

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        });
    }
}
