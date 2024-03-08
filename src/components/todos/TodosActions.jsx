import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import style from './TodosActions.module.css'

function TodoActions({ resetTodos, deleteCompletedTodos, comletedTodosExist }) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title="Перезагрузить все задачи" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Удалить все завершенные задачи"
        onClick={deleteCompletedTodos}
        disabled={!comletedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions
