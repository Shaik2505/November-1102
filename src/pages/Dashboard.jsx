import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = [
    { name: "Event A", value: 400 },
    { name: "Event B", value: 300 },
    { name: "Event C", value: 300 },
    { name: "Event D", value: 200 },
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = data.filter((event) =>
      event.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const COLORS = [
    "#FF5733",
    "#33FF57",
    "#FFC300",
    "#FF5733",
    "#DC3545",
    "#FFD700",
  ];

  return (
    <div className="man-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-primary dark:text-darkPrimary">
          Dashboard
        </h1>
      </header>

      <section className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Events..."
          className="p-2 bg-gray-200 dark:bg-gray-700 border rounded border-border dark:border-darkBorder shadow-md dark:shadow-background mb-2 w-full"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-darkSecondary dark:shadow-Primary p-6 rounded-lg shadow-md border border-primary dark:border-darkPrimary h-96 ">
          <h2 className="text-lg font-semibold text-secondary dark:text-darkSecondary mb-4">
            Event Performance
          </h2>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={searchResults.length > 0 ? searchResults : data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                fill="#FF5733"
                label
              >
                {(searchResults.length > 0 ? searchResults : data).map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  )
                )}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-background dark:bg-darkSecondary dark:shadow-darkPrimary p-4 rounded-lg shadow-md border border-primary dark:border-darkPrimary h-96">
          <h2 className="text-lg font-semibold text-secondary dark:text-darkSecondary">
            Achievements
          </h2>
          <ul>
            <li className="mb-2">
              <span className="text-success dark:text-darkSuccess">✔ </span>
              Achievement 1
            </li>
            <li className="mb-2">
              <span className="text-success dark:text-darkSuccess">✔ </span>
              Achievement 2
            </li>
            <li className="mb-2">
              <span className="text-success dark:text-darkSuccess">✔ </span>
              Achievement 3
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white dark:bg-darkSecondary dark:shadow-darkPrimary p-4 rounded-lg shadow-md border border-primary dark:border-darkPrimary h-96">
          <h2 className="text-lg font-semibold text-secondary dark:text-darkSecondary mb-4">
            Event Search Results
          </h2>
          <div className="w-full h-full">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="mb-2">
                    {result.name} - {result.value} attendees
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-darkSecondary dark:shadow-darkPrimary p-4 rounded-lg shadow-md border border-primary dark:border-darkPrimary h-96">
          <h2 className="text-lg font-semibold text-secondary dark:text-darkSecondary mb-4">
            Event Attendance
          </h2>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={searchResults.length > 0 ? searchResults : data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#FF5733">
                {(searchResults.length > 0 ? searchResults : data).map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  )
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
