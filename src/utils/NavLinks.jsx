import React from "react";
import { useNavigate } from "react-router-dom";

const NavLinks = ({ onLinkClick, handleDropdownToggle, activeDropdown, dropdownRefs }) => {
  // Define the reused CSS classes as a constant
  const baseClasses =
    "text-text block md:inline-block hover:text-text/50 transition duration-300 py-2 px-2 dark:text-darkText dark:hover:text-darkOnHover";

  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (path) => {
    handleScrollToTop();
    if (onLinkClick) onLinkClick(); // Call onLinkClick if provided
    navigate(path);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
      {/* Home Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/home")}>
        Home
      </button>
      {/* Dashboard Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/dashboard")}>
        Dashboard
      </button>
      {/* Event Creation Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/event")}>
        Event Creation
      </button>
      {/* Performer Directory Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/performerdirectory")}>
        Performer Directory
      </button>
      {/* Live Performance Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/feedbackform")}>
        Live Performance
      </button>
      {/* Profile Link */}
      <button className={baseClasses} onClick={() => handleLinkClick("/body/profile")}>
        Profile
      </button>
    </div>
  );
};

export default NavLinks;
