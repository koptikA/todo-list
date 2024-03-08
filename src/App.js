import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from "./components/todos/TodoForm"
import TodosList from "./components/todos/TodoList"
import TodoActions from "./components/todos/TodosActions"
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
   
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    
    setTodos(todos.filter((todo) => todo.id !==id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id
      ? {...todo, isCompleted: !todo.isCompleted}
      : {...todo}
    ))
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Задачи</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
        comletedTodosExist={!!completedTodosCount} 
        resetTodos={resetTodoHandler} 
        deleteCompletedTodos={deleteCompletedTodosHandler} />
      )}
      
      <TodosList 
        todos={todos} 
        deleteTodo={deleteTodoHandler} 
        toggleTodo={toggleTodoHandler}/>

        {completedTodosCount > 0 && <h2>{`Выполнено ${completedTodosCount} ${completedTodosCount > 1 ? "задач" : "задача"}`}</h2>}
    </div>
  )
}

export default App;