import dbConnect from '../../lib/mongodb'
import Feedback from '../../models/feedback'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const feedbacks = await Feedback.find({})
        res.status(200).json({ success: true, data: feedbacks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const feedback = await Feedback.create(req.body)
        res.status(201).json({ success: true, data: feedback })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}