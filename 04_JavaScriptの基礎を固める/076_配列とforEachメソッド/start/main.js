const arry = [1, 2, 3, 4, 5];

arry.forEach(function (v, i, ary) {
  console.log(v, i, ary);
});

// 上記のforEach文をアロー関数にすると
arry.forEach(v => console.log(v));
// ここまで短くなる


for (let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log(v);
}
// forEachで記述した方がコーディング量が少ない　＝　バグが発生するリスクが低い。その為、for文で書くよりもforEach文で書く方がおすすめされる。
