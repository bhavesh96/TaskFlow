import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import { useEffect } from 'react'

// DUMMY DATA: In a real app, you'd fetch this from your API
const initialTask = [
  {
    id: 1,
    userEmail: "amit@candidate.com",
    userPassword: "123",
    task: [
      {
        taskId: 1,
        heading: "Complete Brand Identity Strategy for AI Startup",
        description: "Create a full brand identity including logo, color system, typography, and branding guidelines for an AI-driven SaaS product.",
        Createdate: "2024-11-12",
        ComplateDate: "2025-01-10",
        status: "Pending"
      },
      {
        taskId: 2,
        heading: "SEO Research & Keyword Mapping for Finance Blog",
        description: "Research top-performing finance keywords and map them into a ranking-focused article structure for long-term content strategy.",
        Createdate: "2024-10-20",
        ComplateDate: "2024-11-05",
        status: "Complate"
      },
      {
        taskId: 3,
        heading: "UI/UX Wireframe Design for Food Delivery App",
        description: "Design intuitive wireframes for a mobile-based food delivery application with seamless checkout and order tracking.",
        Createdate: "2024-12-01",
        ComplateDate: "2025-02-15",
        status: "Pending"
      },
      {
        taskId: 4,
        heading: "Landing Page Copywriting for Digital Marketing Agency",
        description: "Write high-converting copy for a digital agency landing page with strong CTA sections, trust-building elements, and FAQs.",
        Createdate: "2024-09-28",
        ComplateDate: "2024-10-10",
        status: "Complate"
      },
      {
        taskId: 5,
        heading: "Social Media Creative Set for Product Launch",
        description: "Design 5-7 Instagram and LinkedIn promotional creative posts for an upcoming SaaS-product launch.",
        Createdate: "2024-10-10",
        ComplateDate: "2025-01-20",
        status: "Pending"
      }
    ]
  },
  {
    id: 2,
    userEmail: "neha@candidate.com",
    userPassword: "123",
    task: [
      {
        taskId: 1,
        heading: "Investor Pitch Deck & Financial Projection Prep",
        description: "Prepare 10-slide investor pitch with market size, revenue model, and clear projections for 24 months.",
        Createdate: "2024-08-17",
        ComplateDate: "2024-09-05",
        status: "Complate"
      },
      {
        taskId: 2,
        heading: "Detailed Market Research Report for EdTech Startup",
        description: "Create a research-backed 15-page document covering competitors, pricing strategy, and user demand in EdTech.",
        Createdate: "2024-12-15",
        ComplateDate: "2025-02-01",
        status: "Pending"
      },
      {
        taskId: 3,
        heading: "Instagram Growth Funnel Strategy for Clothing Brand",
        description: "Design a content strategy with reels, influencer outreach & user-generated content system to increase conversions.",
        Createdate: "2024-11-10",
        ComplateDate: "2025-01-08",
        status: "Pending"
      },
      {
        taskId: 4,
        heading: "Long-form Blog Article on Future of AI in Healthcare",
        description: "Write a deeply-researched 2000-word article discussing AI-powered diagnostic tools and ethical implications.",
        Createdate: "2024-09-05",
        ComplateDate: "2024-09-25",
        status: "Complate"
      }
    ]
  },
  {
    id: 3,
    userEmail: "rahul@candidate.com",
    userPassword: "123",
    task: [
      {
        taskId: 1,
        heading: "Full E-Commerce Conversion Optimization Audit",
        description: "Audit Shopify store to identify UX, trust factor, checkout friction & performance issues impacting sales.",
        Createdate: "2024-11-19",
        ComplateDate: "2024-12-05",
        status: "Complate"
      },
      {
        taskId: 2,
        heading: "Redesign Hero Section and CTA Layout in React",
        description: "Redesign first fold for improved retention rates using clean minimalist UI and advanced call-to-action hierarchy.",
        Createdate: "2024-12-22",
        ComplateDate: "2025-01-30",
        status: "Pending"
      },
      {
        taskId: 3,
        heading: "Generate 3 Lead Magnet Ideas for SaaS Automation Tool",
        description: "Create valuable downloadable PDF/guide concepts that attract top-of-funnel users efficiently.",
        Createdate: "2024-10-01",
        ComplateDate: "2024-10-15",
        status: "Complate"
      },
      {
        taskId: 4,
        heading: "Next.js Migration Plan for Legacy React Dashboard",
        description: "Prepare a detailed migration breakdown including performance gains and SSR/ISR advantages.",
        Createdate: "2025-01-14",
        ComplateDate: "2025-03-01",
        status: "Pending"
      }
    ]
  },
  {
    id: 4,
    userEmail: "sara@candidate.com",
    userPassword: "123",
    task: [
      {
        taskId: 1,
        heading: "Research-Based Report on Top Financial SaaS in 2025",
        description: "Compile data-driven analysis of top performing SaaS finance startups and their positioning.",
        Createdate: "2024-07-20",
        ComplateDate: "2024-08-20",
        status: "Complate"
      },
      {
        taskId: 2,
        heading: "Client Proposal Document for Branding Consultation",
        description: "Create a premium 5-page business proposal with pricing breakdown and phased deliverables.",
        Createdate: "2024-10-05",
        ComplateDate: "2024-11-01",
        status: "Complate"
      },
      {
        taskId: 3,
        heading: "Newsletter Copy for LinkedIn and Email Campaign",
        description: "Write professional weekly newsletter covering startup insights and industry trends.",
        Createdate: "2024-12-25",
        ComplateDate: "2025-02-05",
        status: "Pending"
      },
      {
        taskId: 4,
        heading: "Onboarding Flow UX Improvements for Mobile App",
        description: "Improve user sign-up journey with minimal steps and focus on retention metrics.",
        Createdate: "2024-11-01",
        ComplateDate: "2025-01-15",
        status: "Pending"
      },
      {
        taskId: 5,
        heading: "High-Impact Case Study Writing for B2B client",
        description: "Create proof-backed customer success story including real revenue numbers and ROI outcomes.",
        Createdate: "2024-08-27",
        ComplateDate: "2024-09-10",
        status: "Complate"
      }
    ]
  },
  {
    id: 5,
    userEmail: "vikas@candidate.com",
    userPassword: "123",
    task: [
      {
        taskId: 1,
        heading: "Full React + Tailwind Portfolio System for Freelancer",
        description: "Develop a modern personal site with project listings, testimonial slider & contact form.",
        Createdate: "2024-11-05",
        ComplateDate: "2025-01-10",
        status: "Pending"
      },
      {
        taskId: 2,
        heading: "Long-form Video Script for AI Automation Brand",
        description: "Write powerful YouTube script for B2B AI product explaining problem & automation benefits.",
        Createdate: "2024-09-15",
        ComplateDate: "2024-10-02",
        status: "Complate"
      },
      {
        taskId: 3,
        heading: "TikTok Viral Content Ideas for Cosmetics Startup",
        description: "Develop 8 trending TikTok concept ideas with emphasis on emotional hook & product impact.",
        Createdate: "2024-10-12",
        ComplateDate: "2024-11-30",
        status: "Complate"
      },
      {
        taskId: 4,
        heading: "Figma Prototype for Learning Management Platform",
        description: "Design smooth student dashboard with leaderboard & gamified progress tracking.",
        Createdate: "2024-12-10",
        ComplateDate: "2025-02-25",
        status: "Pending"
      },
      {
        taskId: 5,
        heading: "Professional Case Study Landing Page in Next.js",
        description: "Create high-converting case study landing template with optimized storytelling.",
        Createdate: "2024-11-18",
        ComplateDate: "2025-01-22",
        status: "Pending"
      }
    ]
  }
];



function App() {
  let data = JSON.parse(localStorage.getItem("taskData"))
  if (!data) {
    localStorage.setItem("taskData", JSON.stringify(initialTask))
    data = JSON.parse(localStorage.getItem("taskData"))
  }

  let [user, setUser] = useState("");
  let [userRoll, setUserRoll] = useState("");
  let [showRegister, setShowRegister] = useState(false);

  let [initialData, setInitialData] = useState(JSON.parse(localStorage.getItem('taskData')))
  useEffect(() => {
      localStorage.setItem('taskData',JSON.stringify(initialData))
      console.log("data Update")
    }, [initialData])

  const handleRegister=(userDetails)=>{
    const userData={
      "id":initialData.length+userDetails.userName,
      "userEmail":userDetails.userEmail,
      "userPassword":userDetails.userPassword,
      "task":[]
    } 
    setInitialData([...initialData,userData])
  }
  
  const handlelogin =(email, password) => {
    const userData = data.find(t => {
      if (email === t.userEmail && password === t.userPassword) {
        setUser(t.userEmail);
        setUserRoll("user");
        localStorage.setItem("loginId", t.userEmail);
        localStorage.setItem("loginRoll", "user");
        console.log("login sucsseccful!");
        return true;
      } else if (email === "admin@xyz.com" && password === "123") {
        setUser("admin@xyz.com");
        setUserRoll("admin");
        localStorage.setItem("loginId", "admin@xyz.com");
        localStorage.setItem("loginRoll", "admin");
        console.log("login sucsseccful!");
        return true;
      }
    })

    if (!userData) {
      alert("Invalid details! Please try again!")
    }
  }

  const goToRegister = () => {
    setShowRegister(!showRegister);
  };


  const logOut = ()=>{
    console.log("Logout Sucssecfully!")
    setUser("")
    setUserRoll("")
    localStorage.setItem("loginId","")
    localStorage.setItem("loginRoll","")
  }

  useEffect(() => {
    const loginId = localStorage.getItem('loginId');
    const loginRoll = localStorage.getItem('loginRoll');
    
    if (loginId && loginRoll){
      setUser(loginId)
      setUserRoll(loginRoll)
    }  
  }, [])
  

  return (
    <>
      {/* <Home /> */}
    
      {/* {!user ? <Login handlelogin={handlelogin}/>:''}       */}
      
      {!user && !showRegister ? <Login handlelogin={handlelogin} goToRegister={goToRegister} /> : ''}
      {!user && showRegister ? <Register handleRegister={handleRegister} goToRegister={goToRegister}  /> : ''}

      {(userRoll == 'user') ? <UserDashboard logOut={logOut} user={user} /> :''}
      {(userRoll == 'admin') ? <AdminDashboard logOut={logOut} user={user} /> :''}
    
      {/* <Register /> */}
    </>
  )
}

export default App
