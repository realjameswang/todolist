// let input = prompt('what would you like to do?');
// const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*****************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*****************')
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Ok, enter an index to delete:'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok, deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown index')
//         }
//     }
//     input = prompt('what would you like to do?')
// }
// console.log('OK QUIT THE APP!')

// // command line notebook
// new - add a new to do
// // list - list all to DOs
// delete - remove specific todo
// quit - quit app

// use let not const becaese this value will change
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

// start simple, the app prompts user to either quit or contineu
// if not quit, user enter the main feature of the app 
