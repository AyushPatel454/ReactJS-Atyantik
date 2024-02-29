export default function Header({todos}) {
    const totalTodo = todos.length;
    const doneTodo = todos.filter(todo => todo.done).length;
    const undoneTodo = totalTodo - doneTodo;
    return (
        <header>
            <h3 id="status">
                Total Todo: {totalTodo} | Done: {doneTodo} | Undone: {undoneTodo}
            </h3>

            <hr/>

            <h1>To Do App</h1>
        </header>
    );
}