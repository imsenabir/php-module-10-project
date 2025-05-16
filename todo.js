let todos = [
    { title: "learn JS", done: false },
    { title: "Do homework", done: false },
    { title: "Make a simple project", done: true },
    { title: "Understanding the array", done: true }
];

let doneTodos = [];
let onGoingTodos = [];

todos.forEach(todo => {
    if(todo.done){
        doneTodos.push(todo)
    } else{
        onGoingTodos.push(todo)
    }
});

console.log("\n ✅ Done todos:");
doneTodos.forEach(todo =>{
    console.log(`- ${todo.title}`)
});

console.log("\n 🚧 OnGoing todos:");
onGoingTodos.forEach(todo =>{
    console.log(`- ${todo.title}`)
});
