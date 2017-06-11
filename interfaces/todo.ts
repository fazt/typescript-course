interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo:ITodo) {
    console.log(todo.title + ':' + todo.text)
}

let todo:ITodo = {title:'task1', text:'my pending task'};

showTodo(todo);
