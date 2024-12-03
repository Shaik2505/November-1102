import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiSend } from "react-icons/fi";

const FeedbackFormWithCharts = () => {
  // State for Feedback Form
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(3);
  const [feedbackData, setFeedbackData] = useState([
    { category: "Timing", score: 4 },
    { category: "Relatability", score: 3 },
    { category: "Engagement", score: 5 },
  ]);

  // State for Live Performance Module
  const [performances, setPerformances] = useState([
    { id: 1, name: "Comedian A", time: "7:00 PM" },
    { id: 2, name: "Comedian B", time: "7:30 PM" },
  ]);
  const [currentPerformer, setCurrentPerformer] = useState(performances[0]);
  const [newPerformance, setNewPerformance] = useState({ name: "", time: "" });

  // Handlers for Feedback Form
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Submitted!");
    setFeedback("");
    setRating(3);
  };

  // Handlers for Live Performance Module
  const addPerformance = () => {
    if (newPerformance.name && newPerformance.time) {
      setPerformances([...performances, { id: Date.now(), ...newPerformance }]);
      setNewPerformance({ name: "", time: "" });
    }
  };

  const startPerformance = (performer) => {
    setCurrentPerformer(performer);
  };

  const removePerformance = (id) => {
    setPerformances(performances.filter((performance) => performance.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-background text-text dark:bg-darkBackground dark:text-darkText">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Performance Management</h1>
      </header>

      {/* Live Performance Module */}
      <div className="p-6 rounded-lg shadow-lg dark:shadow-primary mb-10 bg-white dark:bg-darkPrimary">
        <h2 className="text-lg font-semibold mb-4">Live Performance Manager</h2>

        {/* Current Performer */}
        <div className="mb-6">
          <h3 className="text-md font-bold">Now Performing</h3>
          {currentPerformer ? (
            <div className="mt-2 p-4 bg-background rounded shadow dark:shadow-primary dark:bg-darkBackground">
              <p className="text-xl font-semibold">{currentPerformer.name}</p>
              <p className="text-sm text-gray-500 dark:text-darkText">
                Scheduled at: {currentPerformer.time}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-darkText">No one is performing currently.</p>
          )}
        </div>

        {/* Add Performance */}
        <div className="mb-6 ">
          <h3 className="text-md font-bold ">Add New Performance</h3>
          <div className="mt-4 flex gap-4">
            <input
              type="text"
              placeholder="Performer Name"
              className="p-2 border rounded border-border w-full dark:bg-darkBackground dark:border-primary shadow-sm dark:shadow-primary"
              value={newPerformance.name}
              onChange={(e) =>
                setNewPerformance({ ...newPerformance, name: e.target.value })
              }
            />
            <input
              type="time"
              className="p-2 border rounded border-border dark:bg-darkBackground dark:border-darkBorder"
              value={newPerformance.time}
              onChange={(e) =>
                setNewPerformance({ ...newPerformance, time: e.target.value })
              }
            />
            <button
              onClick={addPerformance}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-highlight dark:bg-darkAccent dark:hover:bg-darkHighlight"
            >
              Add
            </button>
          </div>
        </div>

        {/* Performance Queue */}
        <div>
          <h3 className="text-md font-bold">Performance Queue</h3>
          <ul className="mt-4 space-y-4">
            {performances.map((performance) => (
              <li
                key={performance.id}
                className="flex justify-between items-center p-4 border rounded border-border bg-background shadow dark:shadow-primary dark:bg-darkPrimary dark:border-darkBorder"
              >
                <div>
                  <p className="font-bold">{performance.name}</p>
                  <p className="text-sm text-gray-500 dark:text-darkText">
                    Scheduled at: {performance.time}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startPerformance(performance)}
                    className="px-4 py-2 bg-secondary text-white rounded hover:bg-highlight dark:bg-darkSecondary dark:hover:bg-darkHighlight"
                  >
                    Start
                  </button>
                  <button
                    onClick={() => removePerformance(performance.id)}
                    className="px-4 py-2 bg-error text-white rounded hover:bg-highlight dark:bg-darkError dark:hover:bg-darkHighlight"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="p-6 rounded-lg shadow-lg dark:shadow-primary mb-10 bg-white dark:bg-darkPrimary">
        <h2 className="text-lg font-semibold mb-4">Submit Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <label className="block mb-4">
            <span className="text-sm">Your Feedback</span>
            <textarea
              className="mt-2 w-full p-2 rounded border bg-background border-border dark:bg-darkBackground dark:border-darkBorder"
              rows="4"
              placeholder="Share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm">Your Rating</span>
            <input
              type="range"
              min="1"
              max="5"
              className="w-full mt-2"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <span className="block mt-1">Rating: {rating}/5</span>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 rounded-lg transition-all bg-primary text-white dark:bg-darkAccent dark:hover:bg-darkHighlight"
          >
            Submit <FiSend className="ml-2" />
          </button>
        </form>
      </div>

      {/* Feedback Chart */}
      <div className="p-6 rounded-lg shadow-lg dark:shadow-primary bg-white dark:bg-secondary">
        <h2 className="text-lg font-semibold mb-4">Feedback Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={feedbackData} barSize={30}>
            <XAxis dataKey="category" stroke="dark:text-black" />
            <YAxis stroke="dark:text-darkText" />
            <Tooltip
              contentStyle={{
                backgroundColor: "dark:bg-background",
                color: "dark:text-text",
              }}
            />
            <Bar
              dataKey="score"
              fill="dark:fill-darkAccent"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FeedbackFormWithCharts;
