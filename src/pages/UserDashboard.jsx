import { useEffect } from 'react';
import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';


const UserDashboard = (props) => {
  let [initialData, setInitialData] = useState(JSON.parse(localStorage.getItem('taskData')))
  let [Task, setTask] = useState([]);

  useEffect(() => {
    setTask(initialData.filter(o => o.userEmail === props.user).map(t => t.task)[0] || []);
  }, [props.user]);

  useEffect(() => {
    localStorage.setItem('taskData',JSON.stringify(initialData))
    console.log("data Update")
  }, [initialData])
  
  
  // Filter Task into different lists
  const pendingTask = Task.filter(o => o.status !== 'Complate');
  const complateTask = Task.filter(o => o.status === 'Complate');
  
  // Function to handle done task
  const handleDone = (taskHading) => {
    setInitialData(initialData.map((data)=>{
      
      if(data.userEmail === props.user){
          const newstatustask =data.task.map((taskk)=>{
            
            if (taskk.heading===taskHading ){
              taskk.status = "Complate"
              return taskk
            }
            else{
              return taskk
            }

          })
          
          return {...data,task:newstatustask}
      }else{
        return data
      }

    })
    )
  };
  

  // Function to handle rejecting an task
  const handleReject = (taskHading) => {
    console.log('Cancel Task:', taskHading);
    setTask(Task.map(task => 
      (task.heading === taskHading) ? { ...task, status: 'Cancel' } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen p-4 text-white bg-blue-800">
          <h2 className="text-2xl font-bold">My Dashboard</h2>
          <nav className="mt-10">
            <a href="#" className="block px-4 py-2 rounded hover:bg-blue-700">Overview</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-blue-700">My Profile</a>
            <a onClick={props.logOut} href="#" className="px-4 py-2 rounded hover:bg-blue-700">Logout</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, User!</h1>
          
          {/* Section for Pending Task */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Pending Task</h2>
            
            {pendingTask.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {pendingTask.map((task,indx) => (
                  
                  <TaskCard 
                    key={indx}
                    task={task}
                    onDone={handleDone}
                    onReject={handleReject}
                  />
                    
                ))}
              </div>
            ) : (
              <p className="text-gray-500">You have no pending Task.</p>
            )}

          </div>

          {/* Section for Task History */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Task History</h2>
             {complateTask.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {complateTask.map((task,indx) => (
                    <TaskCard 
                      key={indx}
                      task={task}
                    />
                  ))}
                </div>
             ) : (
              <p className="text-gray-500">You have no completed Task.</p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;