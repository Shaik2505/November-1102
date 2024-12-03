import React from 'react';

const HelpSupportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed pt-16 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-background dark:bg-darkBackground text-text dark:text-darkText p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-primary dark:text-darkHighlight">Help & Support</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-accent dark:text-darkAccent">Tutorials</h3>
          <p className="text-sm">
            Learn how to get the most out of the platform with our step-by-step guides.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-secondary dark:text-darkSecondary">FAQs</h3>
          <p className="text-sm">
            Got questions? Our frequently asked questions cover common concerns.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-warning dark:text-darkWarning">Contact Support</h3>
          <p className="text-sm">
            Need assistance? Reach out to our support team for help.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-error dark:bg-darkError text-white rounded hover:bg-highlight dark:hover:bg-darkOnHover"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HelpSupportModal;
