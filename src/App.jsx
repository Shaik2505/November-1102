import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import EventCreation from "./pages/EventCreation";
import PerformerDirectory from "./pages/PerformerDirectory";
import FeedbackFormWithCharts from "./pages/FeedbackFormWithCharts";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/body"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="event" element={<EventCreation />} />
          <Route path="performerdirectory" element={<PerformerDirectory />} />
          <Route path="feedbackform" element={<FeedbackFormWithCharts />} />
          <Route path="profile" element={<UserProfile />} />

          {/* Nested Routes for Dropdown Links */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
