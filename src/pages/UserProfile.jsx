import React, { useState, useEffect } from "react";
import EditProfileModal from "../components/EditProfileModal";
import HelpSupportModal from "../components/HelpSupportModal";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleEditProfile = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setIsModalOpen(false);
  };

  const handleHelpOpen = () => setIsHelpModalOpen(true);
  const handleHelpClose = () => setIsHelpModalOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setUserData((prevData) => ({ ...prevData, image: imageUrl }));
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userData, image: imageUrl })
        );
        document.body.style.backgroundImage = `url(${imageUrl})`;
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${userData.image || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex flex-col justify-around items-center bg-darkBackground shadow-md rounded-lg max-w-md mx-auto md:max-w-lg lg:max-w-xl p-10 mt-14 ${
          theme === "dark" ? "dark:bg-gray-800" : ""
        } opacity-95`}
      >
        {/* Profile Section */}
        <div
          className="w-24 h-24 mb-4 cursor-pointer"
          onClick={triggerFileInput}
        >
          <img
            src={userData.image || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="rounded-full object-cover w-full h-full"
          />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl text-white font-semibold mb-2">{userData.name}</h2>
          <p className="text-white mb-2">{userData.email}</p>
          <p className="text-white mb-2">
            {userData.phone || "+20-01274318900"}
          </p>
          <p className="text-white mb-4">
            {userData.address || "285 N Broad St, Elizabeth, NJ 07208, USA"}
          </p>

          <button
            onClick={handleEditProfile}
            className="px-6 py-2 bg-blue-500 text-white rounded"
          >
            Edit Profile
          </button>
        </div>
        <EditProfileModal
          userData={userData}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />

        {/* Help & Support Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg text-white font-semibold">Help & Support</h3>
          <button
            onClick={handleHelpOpen}
            className="mt-2 px-4 py-2 bg-primary dark:bg-darkPrimary text-white rounded"
          >
            Learn More
          </button>
        </div>
        <HelpSupportModal isOpen={isHelpModalOpen} onClose={handleHelpClose} />
      </div>
    </div>
  );
};

export default UserProfile;
