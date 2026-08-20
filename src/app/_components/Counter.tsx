'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="my-6 p-6 flex items-center justify-between gap-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md max-w-sm">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-neutral-500">Interactive Component</span>
        <span className="text-3xl font-extrabold text-neutral-900 dark:text-white">{count}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(prev => Math.max(0, prev - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-lg font-bold text-neutral-800 dark:text-neutral-200 transition-colors select-none"
        >
          -
        </button>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-lg font-bold text-white transition-colors select-none"
        >
          +
        </button>
      </div>
    </div>
  )
}
