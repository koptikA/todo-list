import Todos from "./Todos";
import styles from "./TodoList.module.css";

function TodosList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.TodoListContainer}>
            {!todos.length && <h2>Нет задач</h2>}
            {todos.map((todo) => 
            <Todos key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
        </div>
    )
}

export default TodosList;