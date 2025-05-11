'use client'
import { useTheme } from 'next-themes'
import { TodoItem } from './index'
import clsx from 'clsx'
import RemoveIcon from '@/assets/remove-icon.svg'
import React from 'react'

type TodoListProps = {
  todos: TodoItem[]
  changeStatus: (id: string) => void
  removeItem: (id: string) => void
}

export default function TodoList(props: TodoListProps) {
  const { todos, changeStatus, removeItem } = props
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
          <span
            className={clsx(
              'max-w-90 overflow-hidden text-ellipsis break-words text-center',
              todo.isDone ? 'line-through' : ''
            )}
          >
            {todo.text}
          </span>
          <button
            onClick={() => handleRemoveTodoItem(todo.id)}
            className="ml-5"
          >
            <RemoveIcon
              className={clsx(
                'h-6 w-6 hover:text-red-400',
                theme === 'light' ? 'text-gray-400' : 'text-gray-200'
              )}
            />
          </button>
        </div>
      ))}
    </div>
  )
}
