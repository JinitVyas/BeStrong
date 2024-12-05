const jwt = require('jsonwebtoken');
const Recommendation = require('../models/Recommendation'); // Import the model
const User = require('../models/User'); // Import the User model

exports.handleRecommendation = async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data: ", data);

    // Assuming the username is passed directly in the request (either in headers or body)
    const username = req.body.username; // or `req.headers.username` or `req.query.username` depending on your request format
    if (!username) return res.status(400).json({ error: "Username is required" });

    // Find user by username in the User collection
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const userId = user._id; // Get the user ID from the found user

    // Transform the workouts array into the desired format
    const modifiedWorkouts = {};
    data.workouts.forEach((workout) => {
      const { name, sets, reps } = workout;
      modifiedWorkouts[`${name}_sets`] = sets;
      modifiedWorkouts[`${name}_reps`] = reps;
    });

    // Prepare the final data to be saved in MongoDB
    const recommendationData = {
      userId,
      age: data.age,
      height: data.height,
      weight: data.weight,
      goal: data.goal,
      healthIssues: data.healthIssues,
      workouts: modifiedWorkouts,
      weeksFollowing: data.weeksFollowing,
    };

    // Save the data to MongoDB
    const newRecommendation = new Recommendation(recommendationData);
    await newRecommendation.save();

    // model pkl load

    //update data with model output

    console.log("Recommendation saved: ", newRecommendation);

    // Respond to the client
    res.json({
      message: "Recommendation processed and saved successfully!",
      recommendation: newRecommendation,
    });
  } catch (err) {
    console.error("Error processing recommendation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
