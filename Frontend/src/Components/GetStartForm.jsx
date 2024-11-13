import React, { useState } from "react";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";

const GetStarted = () => {
  const [goal, setGoal] = useState("Muscle Gain");
  const [healthIssues, setHealthIssues] = useState([]);
  const [workouts, setWorkouts] = useState([{ name: "", sets: "", reps: "" }]);

  const healthIssuesOptions = [
    "Heart Issues",
    "Respiratory Issues",
    "Diabetes",
    "High Blood Pressure",
    "Chronic Back Pain",
  ];

  const exerciseList = {
    Chest: ["Bench Press", "Push-Ups", "Chest Fly"],
    Legs: ["Squats", "Lunges", "Leg Press"],
    Biceps: ["Bicep Curls", "Hammer Curls", "Concentration Curls"],
    Shoulders: ["Overhead Press", "Lateral Raise", "Front Raise"],
    Back: ["Deadlifts", "Pull-Ups", "Rows"],
    Triceps: ["Tricep Dips", "Skull Crushers", "Tricep Pushdowns"],
  };

  const handleHealthIssuesChange = (issue) => {
    setHealthIssues((prevIssues) =>
      prevIssues.includes(issue)
        ? prevIssues.filter((i) => i !== issue)
        : [...prevIssues, issue]
    );
  };

  const handleWorkoutChange = (index, field, value) => {
    const newWorkouts = [...workouts];
    newWorkouts[index][field] = value;
    setWorkouts(newWorkouts);
  };

  const addWorkout = () => {
    setWorkouts([...workouts, { name: "", sets: "", reps: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  };

  return (
    <>
      <HeaderSection />
      <div className="flex items-center justify-center pt-24 min-h-screen bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold text-center">User Profile and Health Information</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age */}
            <div className="relative">
              <label htmlFor="age" className="block mb-2 text-lg font-medium">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                required
                min="0"
                className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Height */}
            <div className="relative">
              <label htmlFor="height" className="block mb-2 text-lg font-medium">Height (in cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                placeholder="Enter your height in cm"
                required
                min="0"
                className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Weight */}
            <div className="relative">
              <label className="block mb-2 text-lg font-medium">Weight (kg)</label>
              <input
                type="number"
                placeholder="Weight"
                required
                min="0"
                className="w-full p-3 mb-2 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Goal Dropdown */}
            <div className="relative">
              <label htmlFor="goal" className="block mb-2 text-lg font-medium">Goal</label>
              <select
                id="goal"
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
                className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white"
              >
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
              </select>
            </div>

            {/* Health Issues Checkboxes */}
            <div className="relative">
              <label className="block mb-2 text-lg font-medium">Health Issues</label>
              <div className="flex flex-wrap space-y-2">
                {healthIssuesOptions.map((issue) => (
                  <label key={issue} className="flex items-center space-x-2 w-1/3">
                    <input
                      type="checkbox"
                      checked={healthIssues.includes(issue)}
                      onChange={() => handleHealthIssuesChange(issue)}
                      className="w-5 h-5 bg-gray-900"
                    />
                    <span className="text-base">{issue}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Weekly Workout Data */}
            <div className="relative">
              <label className="block text-lg mb-1 font-medium">Weekly Workout Data</label>

              {workouts.map((workout, index) => (
                <div key={index} className="mb-6">
                  {/* Exercise Name Dropdown */}
                  <div>
                    <label className="block mb-2 text-lg">Exercise</label>
                    <select
                      value={workout.name}
                      onChange={(e) => handleWorkoutChange(index, "name", e.target.value)}
                      className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white"
                    >
                      <option value="">Select Exercise</option>
                      {Object.entries(exerciseList).map(([group, exercises]) => (
                        <optgroup key={group} label={group}>
                          {exercises.map((exercise) => (
                            <option key={exercise} value={exercise}>{exercise}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Sets and Reps */}
                  <div className="flex space-x-4">
                    <div>
                      <label className="block my-2 text-lg">Sets</label>
                      <input
                        type="number"
                        placeholder="Sets"
                        value={workout.sets}
                        onChange={(e) => handleWorkoutChange(index, "sets", e.target.value)}
                        min="0"
                        className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block my-2 text-lg">Reps</label>
                      <input
                        type="number"
                        placeholder="Reps"
                        value={workout.reps}
                        onChange={(e) => handleWorkoutChange(index, "reps", e.target.value)}
                        min="0"
                        className="w-full p-3 bg-gray-900 rounded-lg border-none focus:outline-none text-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addWorkout}
                className="w-full bg-lime-500 text-black py-2 rounded-lg font-semibold hover:bg-lime-400 transition-colors"
              >
                Add Another Exercise
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-80 bg-lime-500 text-black py-3 rounded-lg font-semibold hover:bg-lime-400 transition-colors block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default GetStarted;
