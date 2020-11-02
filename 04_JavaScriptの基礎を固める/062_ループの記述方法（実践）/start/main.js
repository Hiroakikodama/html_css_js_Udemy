const todos = [
  {
    id: 1,
    title: 'Go to school',
    compleated: true
  },
  {
    id: 2,
    title: 'Go to museam',
    compleated: true
  },
  {
    id: 3,
    title: 'Go to shopping',
    compleated: false
  }
]


// for (let i = 0; i < todos.length; i++) {
  //   let todo = todos[i];
  //   console.log(i, todo.compleated);
  // }


  // 完了しているもののみ出力する場合はif文を使う
  for (let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if (todo.compleated === true) {
    console.log(i, todo.title);
    }
  }

for (let i in todos) {
  let todo = todos[i];
  if (todo.compleated === true) {
    console.log(i, todo.title);
  }
}

for (let todo of todos) {
  if (todo.compleated === true) {
    console.log(todo.title);
  }
}
