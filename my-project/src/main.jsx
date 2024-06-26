import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Team from './pages/Team.jsx';
import Blogs from './pages/Blogs.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/projectsPage' element={<ProjectsPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
