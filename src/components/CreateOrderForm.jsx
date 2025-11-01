import React, { useEffect, useState } from 'react';


const CreateOrderForm = () => {
  const [assigneTo, setAssigneTo] = useState("")
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [ComplateDate, setComplateDate] = useState('');
  const [employeesData, setEmployeesData] = useState([]);
  const [employeesEmails, setEmployeesEmails] = useState([])
  
 useEffect(() => {
  const stored = localStorage.getItem("taskData");
  if (stored) {
    setEmployeesData(JSON.parse(stored));
  }
  }, []);
  
  useEffect(() => {
    setEmployeesEmails(employeesData.map(data=>data.userEmail))
  }, [employeesData])
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const CreateDare = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    // In a real app, you'd send this data to your backend/database
    const newOrder = {assigneTo, heading, description, ComplateDate, CreateDare };

    employeesData.map(Data=>{
      if (assigneTo === Data.userEmail){
        Data.task.push({"taskId":0,'heading':heading,'description':description,'ComplateDate':ComplateDate,"CreateDate":CreateDare,"status":"Pending"})
      }
    })
    
    localStorage.setItem('taskData',JSON.stringify(employeesData))
    
    // Reset form
    setHeading('');
    setDescription('');
    setComplateDate('');
    setAssigneTo('');
  };
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">
        Create New Order
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700">Assigne to</label>
          <select
          name="assignTo"
          id="assignTo"
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
          value={assigneTo}
          onChange={(e)=>setAssigneTo(e.target.value)}
          >
            <option value="" disabled>Pls choose one</option>
            {employeesEmails.map(email=>{
              return <option className='w-fit' key={email} value={email} >{email}</option>
            })}
            
          </select>
        </div>

        <div>
          <label 
            htmlFor="heading" 
            className="block text-sm font-medium text-gray-700"
          >
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., New Website Project"
          />
        </div>

        <div>
          <label 
            htmlFor="description" 
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Details about the order..."
          />
        </div>

        <div>
          <label 
            htmlFor="ComplateDate" 
            className="block text-sm font-medium text-gray-700"
          >
            Complate Date
          </label>
          <input
            id="ComplateDate"
            type="Date"
            value={ComplateDate}
            onChange={(e) => setComplateDate(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Remote or Client Office"
          />
        </div>

        {/* <div>
          <label 
            htmlFor="CreateDate" 
            className="block text-sm font-medium text-gray-700"
          >
            Create Date
          </label>
          <input
            id="CreateDate"
            type="Date"
            value={CreateDate}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div> */}

        <div>
          <button
            type="submit"
            className="w-fit px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrderForm;