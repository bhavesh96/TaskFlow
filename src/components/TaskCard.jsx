import React from 'react';

// Helper function to get status badge styles
const getStatusBadge = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Accepted':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const TaskCard = ({ task, onDone, onReject }) => {
  const { taskId, heading, description, ComplateDate , CreateDate, status } = task;
  

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900">{heading}</h3>
        <span
          className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusBadge(
            status
          )}`}
        >
          {status}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-800">{description}</p>
        <div className="space-y-1">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Complate Date:</span> {ComplateDate}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Assigne Date:</span> {CreateDate}
          </p>
        </div>
      </div>

      {/* Card Footer (Actions) */}
      {status === 'Pending' && (
        <div className="px-4 py-3 space-x-2 text-right bg-gray-50">
          <button
            onClick={() => onReject(heading)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Reject
          </button>
          <button
            onClick={() => onDone(heading)}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
           Done 
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;