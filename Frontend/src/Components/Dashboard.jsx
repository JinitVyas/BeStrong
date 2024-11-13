import React, { useState } from 'react';
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';
import { Link } from 'react-router-dom';

const Dashboard = ({ username }) => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  const workoutHistory = [];
  const currentExercises = [];

  return (
    <>
      <HeaderSection />
      <div className="pt-20 p-8 bg-black text-white min-h-[91vh]">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold mb-6">Welcome, {username}!</h1>

        {/* Dashboard Grid */}
        <div className="flex gap-6">
          {/* Workout History Column (30% width) */}
          <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold mb-4">Workout History</h2>

            {workoutHistory.length > 0 ? (
              workoutHistory.map((week, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left py-2 text-lime-500 font-semibold hover:text-lime-400 transition-colors"
                    onClick={() => toggleWeek(week.week)}
                  >
                    {week.week}
                  </button>
                  {expandedWeek === week.week && (
                    <ul className="ml-4 text-gray-300 space-y-1">
                      {week.exercises.map((exercise, i) => (
                        <li key={i}>• {exercise}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center text-gray-300">
                <p className='font-bold text-2xl m-10'>No Workout History!!!</p>
              </div>
            )}
          </div>

          {/* Current Exercise Column (70% width) */}
          <div className="w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold mb-4">Current Exercises</h2>

            {currentExercises.length > 0 ? (
              currentExercises.map((exercise, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={`exercise-${index}`}
                    className="w-5 h-5 text-lime-500 bg-gray-900 border-none rounded focus:ring-0"
                  />
                  <label
                    htmlFor={`exercise-${index}`}
                    className="text-lg font-medium text-gray-300"
                  >
                    {exercise.name}
                  </label>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center text-gray-300 space-y-4">
                <img
                  src="/Photos/Funny_Panda.jpg"
                  alt="No current exercises"
                  className="w-[20vw] h-auto"   loading="eager"
                />

                <p className='font-bold text-xl'> No Current Exercises</p>
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
