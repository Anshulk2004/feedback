'use client'

import React, { useState } from 'react'
import RatingSection from './RatingSection'
import { analyzeSentiment } from '../lib/sentimentAnalysis'

type Colleague = {
  id: number
  name: string
  role: string
  relationship: string
}

type Props = {
  colleague: Colleague
}

export default function FeedbackForm({ colleague }: Props) {
  const [feedback, setFeedback] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [ratings, setRatings] = useState({
    communication: 0,
    teamwork: 0,
    leadership: 0,
    problemSolving: 0,
    creativity: 0
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const sentiment = await analyzeSentiment(feedback)
    if (sentiment < 0) {
      alert('Please ensure your feedback is constructive and positive.')
      return
    }
    // Submit feedback logic here
    console.log('Feedback submitted', { colleague, feedback, isAnonymous, ratings })
  }

  const handleSaveDraft = () => {
    // Save draft logic here
    console.log('Draft saved', { colleague, feedback, isAnonymous, ratings })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Feedback for {colleague.name}</h2>
      
      <div>
        <label htmlFor="feedback" className="block mb-2 dark:text-gray-300">Your Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white:border-gray-600"
          rows={5}
          required
        />
      </div>

      <RatingSection ratings={ratings} setRatings={setRatings} />

      <div>
        <label className="flex items-center dark:text-gray-300">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="mr-2"
          />
          Submit Anonymously
        </label>
      </div>

      <div className="flex space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
          Submit Feedback
        </button>
        <button type="button" onClick={handleSaveDraft} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">
          Save as Draft
        </button>
      </div>
    </form>
  )
}