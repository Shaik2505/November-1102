import React, { useState } from "react";

// Modal Component
const PerformerModal = ({ performer, onClose }) => {
  if (!performer) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white px-10 py-16 rounded-lg shadow-lg max-w-md w-full dark:bg-darkPrimary scale-150">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
        >
          Close
        </button>
        <img
          src={performer.image}
          alt={performer.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{performer.name}</h2>
        <p className="text-secondary mb-2">{performer.genre}</p>
        <p className="text-highlight mb-2">
          Rating: <span className="font-bold">{performer.rating}</span> / 5
        </p>
      </div>
    </div>
  );
};

const PerformerDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerformer, setSelectedPerformer] = useState(null);

  // Sample performer data
  const performers = [
    {
      id: 1,
      name: "John Doe",
      genre: "Stand-up Comedy",
      rating: 4.5,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      genre: "Improv",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      genre: "Satire",
      rating: 4.7,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 4,
      name: "Sarah Lee",
      genre: "Musical Comedy",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 5,
      name: "Emma Watson",
      genre: "Sketch Comedy",
      rating: 4.6,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 6,
      name: "Chris Rock",
      genre: "Political Satire",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 7,
      name: "Dave Chappelle",
      genre: "Social Commentary",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 8,
      name: "Tina Fey",
      genre: "Improv",
      rating: 4.7,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 9,
      name: "Kevin Hart",
      genre: "Physical Comedy",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 10,
      name: "Amy Poehler",
      genre: "Satire",
      rating: 4.6,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 11,
      name: "Eddie Murphy",
      genre: "Stand-up Comedy",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
    {
      id: 12,
      name: "Ali Wong",
      genre: "Relatable Humor",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/4b/df/9f/4bdf9fb231c853c18daa9d12db782f7c.jpg",
    },
  ];

  // Filter performers based on the search term
  const filteredPerformers = performers.filter((performer) =>
    performer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background text-text dark:bg-darkBackground dark:text-darkText p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-darkPrimary">
        Performer Directory
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search performers by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-darkPrimary dark:border-darkBorder dark:focus:ring-darkHighlight dark:focus:ring-2"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredPerformers.map((performer) => (
          <div
            key={performer.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 border border-border dark:bg-darkPrimary dark:border-darkBorder dark:shadow-md dark:hover:shadow-lg  dark:shadow-primary"
          >
            <img
              src={performer.image}
              alt={performer.name}
              className="w-full h-60 object-cover rounded-md "
            />
            <h2 className="text-xl font-semibold mt-4 text-primary dark:text-darkPrimary">
              {performer.name}
            </h2>
            <p className="text-secondary mt-2 dark:text-darkSecondary">
              {performer.genre}
            </p>
            <p className="mt-2 text-highlight dark:text-darkHighlight">
              Rating: <span className="font-bold">{performer.rating}</span> / 5
            </p>
            <button
              onClick={() => setSelectedPerformer(performer)}
              className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-highlight dark:bg-darkAccent dark:hover:bg-darkHighlight transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}

        {filteredPerformers.length === 0 && (
          <p className="text-warning text-center col-span-full dark:text-darkWarning">
            No performers match your search.
          </p>
        )}
      </div>

      <PerformerModal
        performer={selectedPerformer}
        onClose={() => setSelectedPerformer(null)}
      />
    </div>
  );
};

export default PerformerDirectory;
