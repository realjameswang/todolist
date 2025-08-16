// new - add a todo
// list - list all todos
// delete - remove specific todo
// quit - quit app

let cmd = prompt ('what would you like to do')
const todos = ['buy chicken breast', 'go to city market']

while (cmd !== 'quit' && cmd !== 'q') {
    if (cmd === 'list') {
        console.log (`******************`)
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log(`******************`)
    } else if (cmd === 'new') {
        const newTodo = prompt ('ok what is the new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (cmd === 'delete') {
        const index = parseInt(prompt('Enter index of todo to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index,1);
            console.log(`ok, deleted ${deleted[0]}`)
        } else {
            console.log ('unknown index')
        }
    }
    cmd = prompt ('What would you like to do')
}
console.log('ok quite the app')
