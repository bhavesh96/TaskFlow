# TaskFlow

**TaskFlow** is a simple task management app I built to understand how user roles and data flow work in a real-world project.  
It allows an **admin** to assign tasks to **employees**, and employees can log in to see, complete, or reject their assigned tasks.

I wanted to make something that feels close to how small companies manage tasks internally — without using any backend.  
So, I used **local storage** to handle all **CRUD** opratioon for the data and user sessions.

---

## Features

-  **Register & Login** system for both admin and employees  
-  **Role-based dashboard** — admin and employee see different views  
-  **Admin:** can assign tasks to employees 
-  **Employee:** can view only their own assigned tasks  
-  **Task actions:** complete or reject a task  
-  **Automatic sectioning:** completed and rejected tasks move to their respective sections  
-  **Local Storage-based data** — no backend, no database needed  

---

## What I Learned

While working on TaskFlow, I learned:
- How to design a simple **authentication system** without a backend  
- How to separate functionality between **admin and employee roles**  
- How to use **localStorage** effectively for saving data persistently  
- Managing conditional rendering and component-level state in React  
- How to make dashboards more interactive with real-time task updates  

This project really helped me understand how front-end logic can simulate backend behavior.

---

## Tech Stack

- **React (Vite)** – for the front-end and component logic  
- **Tailwind CSS** – for responsive styling  
- **Local Storage API** – for saving user data and tasks  
- **React Router** – for navigation between login, dashboard, and task views  

---

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/bhavesh96/TaskFlow.git

2. Install dependencies:
    ```bash
    npm install

3. Start the app:
    ```bash
    npm run dev

Open http://localhost:5173 in your browser.

## Admin login details

**Email Id :admin@xyz.com**
**Password :123**
    

## About
TaskFlow started as a small experiment to understand how a single-page app can handle multiple user types and data without needing a backend.
I tried to make it as simple and realistic as possible, focusing on the logic and flow rather than complex libraries.
