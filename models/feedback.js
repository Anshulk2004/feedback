import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
  colleagueId: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  ratings: {
    communication: { type: Number, min: 1, max: 5 },
    teamwork: { type: Number, min: 1, max: 5 },
    leadership: { type: Number, min: 1, max: 5 },
    problemSolving: { type: Number, min: 1, max: 5 },
    creativity: { type: Number, min: 1, max: 5 },
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema)