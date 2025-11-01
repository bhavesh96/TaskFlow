import React, { useEffect, useState } from 'react';
import CreateOrderForm from '../components/CreateOrderForm'; // Import the form

const AdminDashboard = ({logOut,user}) => {
  const employeesData = JSON.parse(localStorage.getItem("taskData"))
  const [noOfEmployees, setNoOfEmployees] = useState(0);
  
  useEffect(() => {
    setNoOfEmployees(employeesData.length)
  }, [employeesData])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen p-4 text-white bg-gray-800">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <nav className="mt-10">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Users</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
            <a onClick={logOut} href="#" className="px-4 py-2 rounded hover:bg-gray-700">Log Out</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          
          {/* Stats Cards (from previous example) */}
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-700">Total Employees</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{noOfEmployees}</p>
            </div>
            
          </div>
          
          {/* Add the Create Order Form here */}
          <div className="mt-10">
            <CreateOrderForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;