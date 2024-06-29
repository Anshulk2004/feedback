'use client'

import { useState, useEffect } from 'react'
import FeedbackForm from '../components/FeedbackForm'
import ColleagueList from '../components/ColleagueList'
import MostValuedColleagues from '../components/MostValuedColleague'
import RatingSection from '../components/RatingSection'


export default function FeedbackPage() {
  const [selectedColleague, setSelectedColleague] = useState(null)
  const [colleagues, setColleagues] = useState([])
  const [mostValuedColleagues, setMostValuedColleagues] = useState([])

  useEffect(() => {
    // Fetch colleagues and most valued colleagues data
    // This is a placeholder for actual API calls
    setColleagues([
      { id: 1, name: 'John Doe', role: 'Developer', relationship: 'Team Member' },
      { id: 2, name: 'Jane Smith', role: 'Designer', relationship: 'Team Lead' },
      // Add more colleagues as needed
    ])

    setMostValuedColleagues([
      { id: 1, name: 'Alice Johnson', role: 'Project Manager', score: 4.8 },
      { id: 2, name: 'Bob Williams', role: 'Senior Developer', score: 4.7 },
      // Add more valued colleagues as needed
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Provide Feedback</h1>
      <p className="mb-6">Please provide respectful and constructive feedback to your colleagues.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ColleagueList 
            colleagues={colleagues} 
            onSelect={setSelectedColleague} 
          />
          {selectedColleague && (
            <FeedbackForm 
              colleague={selectedColleague}
            />
          )}
        </div>
        <div>
          <MostValuedColleagues colleagues={mostValuedColleagues} />
        </div>
      </div>
    </div>
  )
}