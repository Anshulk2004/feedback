import React from 'react'

type Colleague = {
  id: number
  name: string
  role: string
  relationship: string
}

type Props = {
  colleagues: Colleague[]
  onSelect: (colleague: Colleague) => void
}

export default function ColleagueList({ colleagues, onSelect }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3 dark:text-white">Select a Colleague</h2>
      <ul className="space-y-2">
        {colleagues.map((colleague) => (
          <li 
            key={colleague.id}
            className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={() => onSelect(colleague)}
          >
            <h3 className="font-semibold dark:text-white">{colleague.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{colleague.role} - {colleague.relationship}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
