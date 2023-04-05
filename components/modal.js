import React from "react";
import PropTypes from "prop-types";

const Modal = ({ onClose, phone_number }) => {
  const { phoneNumber } = phone_number;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-96 bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">(801)256-4378</p>
        <button
          className="bg-Sage hover:bg-sageAnimate text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   seller: PropTypes.shape({
//     phone_number: PropTypes.string.isRequired,
//   }),
// };

export default Modal;
