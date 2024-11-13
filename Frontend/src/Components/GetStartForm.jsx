import React, { useState } from "react";
import { FaUser, FaEnvelope, FaWeight } from "react-icons/fa";

const Signup = () => {
  const [goal, setGoal] = useState("Weight Loss");
  const [muscleGroup, setMuscleGroup] = useState("Chest");
  const healthIssuesOptions = ["Heart Issues", "Diabetes", "High Blood Pressure", "Chronic Back Pain"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <div className="flex items-center bg-gray-900 rounded-lg">
              <FaUser className="text-lime-500 ml-3" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <div className="flex items-center bg-gray-900 rounded-lg">
              <FaEnvelope className="text-lime-500 ml-3" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Age */}
          <div className="relative">
            <label htmlFor="age" className="block mb-2 text-sm font-medium">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
            />
          </div>

          {/* Height */}
          <div className="relative">
            <label htmlFor="height" className="block mb-2 text-sm font-medium">Height (in cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height in cm"
              className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
            />
          </div>

          {/* Weight */}
          <div className="relative">
            <label htmlFor="weight" className="block mb-2 text-sm font-medium">Weight (in kg)</label>
            <div className="flex items-center bg-gray-900 rounded-lg">
              <FaWeight className="text-lime-500 ml-3" />
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="Enter your weight"
                className="w-full p-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Goal Dropdown */}
          <div className="relative">
            <label htmlFor="goal" className="block mb-2 text-sm font-medium">Goal</label>
            <select
              id="goal"
              name="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white"
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Health Issues Checkboxes */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium">Health Issues</label>
            <div className="flex flex-wrap space-x-4 space-y-2 text-sm">
              {healthIssuesOptions.map((issue) => (
                <label key={issue} className="flex items-center space-x-2">
                  <input type="checkbox" id={issue} name="healthIssues" className="bg-gray-900" />
                  <span>{issue}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Current Exercise */}
          <div className="relative space-y-4">
            <label className="block mb-2 text-sm font-medium">Current Exercise</label>
            
            {/* Muscle Group Dropdown */}
            <div>
              <label htmlFor="muscleGroup" className="block mb-2 text-sm">Muscle Group</label>
              <select
                id="muscleGroup"
                name="muscleGroup"
                value={muscleGroup}
                onChange={(e) => setMuscleGroup(e.target.value)}
                className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white"
              >
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Biceps">Biceps</option>
                <option value="Back">Back</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs">Abs</option>
              </select>
            </div>

            {/* Exercise Name Input */}
            <div>
              <label htmlFor="exerciseName" className="block mb-2 text-sm">Exercise Name</label>
              <input
                type="text"
                id="exerciseName"
                name="exerciseName"
                placeholder="Enter exercise name"
                className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Sets and Reps Inputs */}
            <div className="flex space-x-4">
              <div>
                <label htmlFor="sets" className="block mb-2 text-sm">Sets</label>
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  placeholder="Sets"
                  className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="reps" className="block mb-2 text-sm">Reps</label>
                <input
                  type="number"
                  id="reps"
                  name="reps"
                  placeholder="Reps"
                  className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Weeks on Current Plan */}
          <div className="relative">
            <label htmlFor="weeks" className="block mb-2 text-sm font-medium">Weeks on Current Plan</label>
            <input
              type="number"
              id="weeks"
              name="weeks"
              placeholder="Enter number of weeks"
              className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-lime-500 text-black py-3 rounded-lg font-semibold hover:bg-lime-400 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
