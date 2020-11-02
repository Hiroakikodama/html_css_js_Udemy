const btn = document.querySelector('#btn');

const hello = function () {
  btn.style.color = 'red';
};

btn.addEventListener('click', hello);
btn.removeEventListener('click', hello);

// 関数を外だししておいた方が、追加も削除も楽
