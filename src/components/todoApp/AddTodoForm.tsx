'use client'

import React from 'react'

type AddTodoFormProps = {
  addTodoItem: (text: string) => void
}

export default function AddTodoForm(props: AddTodoFormProps) {
  const { addTodoItem } = props
  const [text, setText] = React.useState('')

  const handleAddTodoItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') return
    addTodoItem(text)
    setText('')
  }

  return (
    <form onSubmit={handleAddTodoItem} className="mb-4 flex gap-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded border border-gray-300 p-3"
        placeholder="Введите текст задачи"
      />
      <button
        type="submit"
        className="rounded bg-green-600 px-4 py-3 text-white hover:bg-green-700"
      >
        Добавить
      </button>
    </form>
  )
}
