import React from "react";
import toast, { Toaster } from "react-hot-toast";

const EventCreation = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    toast.success("Event created successfully!", {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <div className="bg-background text-text dark:bg-darkBackground dark:text-darkText min-h-screen border border-primary">
      <Toaster />
      {/* Header Section */}
      <header className="relative bg-primary dark:bg-darkAccent text-white p-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Comedy Event</h1>
          <p className="text-lg md:text-xl">
            Create, manage, and bring your comedy events to life effortlessly.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://i.pinimg.com/736x/1f/5f/a2/1f5fa21e62ceeccd2d4676ad91c11d26.jpg"
            alt="Comedy Event Background"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white dark:bg-darkPrimary shadow-lg rounded-lg p-6 transition-transform hover:scale-105 border border-primary">
            <h2 className="text-2xl font-bold text-primary dark:text-darkAccent mb-6 text-center">
              Event Details
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Event Name */}
              <div className="mb-4">
                <label htmlFor="eventName" className="block text-sm font-medium mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  placeholder="Enter event name"
                  className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="eventTime" className="block text-sm font-medium mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label htmlFor="eventLocation" className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  placeholder="Enter location"
                  className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                />
              </div>

              {/* Event Type */}
              <div className="mb-4">
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                >
                  <option value="">Select an event type</option>
                  <option value="workshop">Workshop</option>
                  <option value="show">Show</option>
                  <option value="competition">Competition</option>
                </select>
              </div>

              {/* File Upload */}
              <div className="mb-4">
                <label htmlFor="fileUpload" className="block text-sm font-medium mb-2">
                  Upload Promotional Material
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  className="w-full p-3 border border-primary dark:border-darkBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-darkAccent transition-shadow"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-primary text-white dark:bg-darkAccent rounded-lg hover:bg-highlight dark:hover:bg-darkOnHover transition-all"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-secondary dark:bg-darkSecondary text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4">Event Management Features</h2>
            <ul className="space-y-3">
              <li>📅 Schedule performances and breaks.</li>
              <li>🎭 Assign performers and track availability.</li>
              <li>💼 Manage resources like props and costumes.</li>
              <li>💰 Plan and monitor budgets efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
