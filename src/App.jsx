import React , {useRef} from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Home from './Home'
import ProjectDetails from './Projectdetails'
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  const contactRef = useRef(null);
  const projectRef = useRef(null);  
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const expertiseRef = useRef(null);
  const educationRef = useRef(null);
  return (
    <>
    <Router>
    <ScrollToTop/>
     <Header scrollRef={contactRef} aboutRef={aboutRef} projectRef={projectRef} educationRef={educationRef}/>
    <Routes>
       <Route path="/" element={<Home scrollRef={contactRef} projectRef={projectRef} experienceRef={experienceRef} expertiseRef={expertiseRef}/>}/>
    <Route path="/projects/:projectDetail" element={<ProjectDetails/>}/>
     </Routes>
     <Footer/>
     </Router>
     <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
