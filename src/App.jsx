import React , {useRef} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Header scrollRef={contactRef} aboutRef={aboutRef} projectRef={projectRef} />
    <Routes>
       <Route path="/" element={<Home scrollRef={contactRef} projectRef={projectRef} experienceRef={experienceRef} expertiseRef={expertiseRef}/>}/>
    <Route path="/projects/:projectDetail" element={<ProjectDetails/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
