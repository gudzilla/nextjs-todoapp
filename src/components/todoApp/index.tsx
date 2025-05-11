'use client'
import React from 'react'
import ThemeToggle from '../ToggleTheme'

export default function TodoApp() {
  const [todos, setTodos] = React.useState({})

  return (
    <div>
      <h1 className="text-3xl">Список задач</h1>
      <ThemeToggle />
    </div>
  )
}
