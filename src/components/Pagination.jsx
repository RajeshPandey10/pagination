import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === i + 1
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-800 hover:bg-blue-100'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
