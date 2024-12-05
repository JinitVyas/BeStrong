const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  goal: { type: String, required: true },
  healthIssues: [{ type: String }], // Array of health issues
  workouts: { type: Object, required: true }, // Modified workouts object
  weeksFollowing: { type: String, required: false }, // Optional
  submissionDate: { type: Date, default: Date.now }, // Auto-generated timestamp
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
