'use client'
import { useTheme } from 'next-themes'
import { TodoItem } from './index'
import clsx from 'clsx'

type TodoListProps = {
  todos: TodoItem[]
  changeStatus: (id: string) => void
  removeItem: (id: string) => void
}

export default function TodoList(props: TodoListProps) {
  const { todos, changeStatus, removeItem } = props
  const { theme } = useTheme()

  const handleChangeItemStatus = (id: string) => {
    changeStatus(id)
  }
  const handleRemoveTodoItem = (id: string) => {
    removeItem(id)
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={clsx(
            'flex items-center justify-between rounded p-3',
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700 text-white'
          )}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleChangeItemStatus(todo.id)}
              className="mr-5 h-5 w-5 cursor-pointer"
            />
          </div>
          <span className={todo.isDone ? 'line-through' : ''}>{todo.text}</span>
          <button
            onClick={() => handleRemoveTodoItem(todo.id)}
            className="ml-5"
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  )
}
