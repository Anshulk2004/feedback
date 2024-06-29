import React from 'react'

type ValuedColleague = {
  id: number
  name: string
  role: string
  score: number
}

type Props = {
  colleagues: ValuedColleague[]
}

export default function MostValuedColleagues({ colleagues }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Most Valued Colleagues</h2>
      <ul className="space-y-3">
        {colleagues.map((colleague) => (
          <li key={colleague.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{colleague.name}</h3>
              <p className="text-smtext-gray-600 dark:text-gray-300">{colleague.role}</p>
            </div>
            <span className="text-lg font-bold text-green-500 dark:text-green-400">{colleague.score.toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}