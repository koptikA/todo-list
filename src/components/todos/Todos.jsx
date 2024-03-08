import { RiDeleteBin2Line } from "react-icons/ri";
import  {FaCheck } from "react-icons/fa";
import styles from "./Todos.module.css";

function Todos({ todo, deleteTodo, toggleTodo }) {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''} `}>
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
            </div>
    )
}

export default Todos;