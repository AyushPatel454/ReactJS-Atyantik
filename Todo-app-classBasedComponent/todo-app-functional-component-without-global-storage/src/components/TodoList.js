import TodoItem from "./TodoItem";

export default function TodoList({todos, updateTodo, deleteTodo}) {
    return (
        <>
            {todos.map((todo) => {

                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </>
    );
}