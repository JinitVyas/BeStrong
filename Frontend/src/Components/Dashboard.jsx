import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedExerciseDay, setExpandedExerciseDay] = useState(null); // New state for current exercises
  const [username, setUsername] = useState(null);
  const [workoutHistory, setWorkoutHistory] = useState([]); // Ensure it's initialized as an empty array
  const [exercisesObject, setExercisesObject] = useState({});

  // Static exercise names
  const exerciseNames = [
    "Bench Press",
    "Pushups",
    "Chest Fly",
    "Squats",
    "Lunges",
    "Leg Press",
    "Bicep Curls",
    "Hammer Curls",
    "Concentration Curls",
    "Overhead Press",
    "Lateral Raise",
    "Front Raise",
    "Deadlifts",
    "Pullups",
    "Rows",
    "Triceps Dips",
    "Skull Crushers",
    "Triceps Pushdowns",
  ];

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  const toggleExerciseDay = (day) => {
    setExpandedExerciseDay(expandedExerciseDay === day ? null : day);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found in localStorage");
        return;
      }

      try {
        // Decode username from JWT token
        const [, payload] = token.split(".");
        const decodedPayload = JSON.parse(
          atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
        );
        const user = decodedPayload.username;
        setUsername(user);

        // Fetch recommendations from backend
        const response = await fetch(
          `http://localhost:5000/api/recommendations`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: user }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Extract the latest week (last item in the sorted array)
          const latestWeek = data[data.length - 1];

          // Extract the rest of the weeks (all except the last item)
          const restOfTheData = data.slice(0, -1);

          // Build the exercise object with exercise names as keys
          const exercisesObject = exerciseNames.reduce((acc, exercise) => {
            const exerciseKeySets =
              exercise.toLowerCase().replace(/\s+/g, "_") + "_sets";
            const exerciseKeyReps =
              exercise.toLowerCase().replace(/\s+/g, "_") + "_reps";

            const sets = latestWeek.recommended_plan[exerciseKeySets];
            const reps = latestWeek.recommended_plan[exerciseKeyReps];

            if (sets !== undefined && reps !== undefined) {
              acc[exercise] = { sets, reps };
            } else {
              acc[exercise] = { sets: "0", reps: "0" };
            }

            return acc;
          }, {});

          // Update the state
          setExercisesObject(exercisesObject);
          setWorkoutHistory(restOfTheData || []); // Fallback to empty array if undefined
        } else {
          console.error("Failed to fetch recommendations:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderSection />
      <div className="pt-20 p-8 bg-black text-white min-h-[91vh]">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold mb-6">
          Welcome, {username || "Guest"}!
        </h1>

        {/* Dashboard Grid */}
        <div className="flex gap-6">
          {/* Workout History Column (30% width) */}
          <div className="w-[40%] bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              Workout History
            </h2>
            {workoutHistory && workoutHistory.length > 0 ? (
              workoutHistory.map((week, index) => {
                const formattedDate = week.submissionDate
                  ? new Date(week.submissionDate).toLocaleDateString()
                  : "N/A";

                return (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    {/* Accordion Header */}
                    <button
                      className="w-full text-left py-2 text-lg text-lime-500 font-semibold hover:text-lime-400 transition-colors flex justify-between items-center"
                      onClick={() => toggleWeek(index)}
                    >
                      <span>Week of {formattedDate}</span>
                      <span>{expandedWeek === index ? "-" : "+"}</span>
                    </button>

                    {/* Accordion Body */}
                    {expandedWeek === index && (
                      <div className="mt-4">
                        <div className="grid grid-cols-[3fr_1fr_1fr] gap-4 text-gray-300">
                          {/* Column Headings */}
                          <div className="text-nowrap font-bold text-lg text-white border-b border-lime-400 pb-1">
                            Exercise Name
                          </div>
                          <div className="font-bold text-lg text-white border-b border-lime-400 pb-1">
                            Sets
                          </div>
                          <div className="font-bold text-lg text-white border-b border-lime-400 pb-1">
                            Reps
                          </div>

                          {/* Exercises Data */}
                          {Object.entries(exercisesObject).map(
                            ([exercise, { sets, reps }], i) => (
                              <React.Fragment key={i}>
                                <div className="text-gray-300">{exercise}</div>
                                <div className="text-gray-300">{sets}</div>
                                <div className="text-gray-300">{reps}</div>
                              </React.Fragment>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center items-center text-gray-300">
                <p className="font-bold text-2xl m-10">No Workout History!!!</p>
              </div>
            )}
          </div>

          {/* Current Exercise Column (70% width) */}
          <div className="w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              Current Week Exercises
            </h2>
            {exercisesObject && Object.keys(exercisesObject).length > 0 ? (
              <div className="space-y-4">
                {[
                  {
                    day: "Monday",
                    heading: "Chest",
                    exercises: ["Bench Press", "Pushups", "Chest Fly"],
                  },
                  {
                    day: "Tuesday",
                    heading: "Legs",
                    exercises: ["Squats", "Lunges", "Leg Press"],
                  },
                  {
                    day: "Wednesday",
                    heading: "Biceps",
                    exercises: [
                      "Bicep Curls",
                      "Hammer Curls",
                      "Concentration Curls",
                    ],
                  },
                  {
                    day: "Thursday",
                    heading: "Shoulders",
                    exercises: [
                      "Overhead Press",
                      "Lateral Raise",
                      "Front Raise",
                    ],
                  },
                  {
                    day: "Friday",
                    heading: "Back",
                    exercises: ["Deadlifts", "Pullups", "Rows"],
                  },
                  {
                    day: "Saturday",
                    heading: "Triceps",
                    exercises: [
                      "Tricep Dips",
                      "Skull Crushers",
                      "Tricep Pushdowns",
                    ],
                  },
                ].map(({ day, heading, exercises }, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    {/* Accordion Header */}
                    <button
                      className="w-full text-left py-2 text-lime-500 font-semibold hover:text-lime-400 transition-colors flex justify-between items-center"
                      onClick={() => toggleExerciseDay(day)}
                    >
                      <span className="text-lg">{day}</span>
                      <span>{expandedExerciseDay === day ? "-" : "+"}</span>
                    </button>

                    {/* Accordion Body */}
                    {expandedExerciseDay === day && (
                      <div className="mt-2">
                        <div className="text-gray-300">
                          <h3 className="font-bold text-lime-400 text-xl mb-2">{heading}</h3>
                          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-gray-300">
                            {/* Column Headings */}
                            <div className="font-bold text-lg text-white border-b border-white pb-1 mb-4">
                              Exercise Name
                            </div>
                            <div className="font-bold text-lg text-white border-b border-white pb-1 mb-4">
                              Sets
                            </div>
                            <div className="font-bold text-lg text-white border-b border-white pb-1 mb-4">
                              Reps
                            </div>
                            <div className="font-bold text-lg text-white border-b border-white pb-1 mb-4">
                              Done
                            </div>
                          </div>

                          {/* Exercises Data with checkboxes */}
                          {exercises.map((exercise, i) => {
                            const { sets, reps } = exercisesObject[
                              exercise
                            ] || { sets: "0", reps: "0" };
                            return (
                              <div
                                key={i}
                                className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-lg text-gray-300"
                              >
                                <div>{exercise}</div>
                                <div>{sets}</div>
                                <div>{reps}</div>
                                <div className="flex justify-center">
                                  <input
                                    type="checkbox"
                                    className="text-lime-500 size-5 mb-2"
                                    id={`checkbox-${exercise}-${i}`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-300 font-bold text-xl">
                No exercises found for this week.
              </div>
            )}
          </div>
        </div>
        {/* Get Started Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/getstarted"
            className="bg-lime-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-lime-400 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Dashboard;
