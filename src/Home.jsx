import React, {useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { motion } from 'framer-motion'
import proj1 from './realstatepic.avif';
import proj2 from './ecommercepic.jpg';
import proj3 from './githubpic.webp';
import proj4 from './blogproject.jpg';
import pic1 from './portfoliopic.jpg';
import emailjs from '@emailjs/browser';
import {FaHome, FaShoppingBag, FaGraduationCap, FaGithub, FaEdit} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form';
 
const Home = ({scrollRef, projectRef, experienceRef, expertiseRef, educationRef}) => {
  const form = useRef();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const OnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current,   import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success('Message sent successfully');
           form.current.reset();
        },
        () => {
          toast.error('Something went wrong');
        },
      );
    }
    const location = useLocation();
      useEffect(() => {
        if(location.state?.scrollToContact){
          const contactForm = document.getElementById('contact-form');
          if(contactForm){
            contactForm.scrollIntoView({behavior: 'smooth'});
          }
        }
         if (location.state?.scrollToProjects) {
    const projectSection = document.getElementById('projects-section');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  if (location.state?.scrollToAbout) {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
   if (location.state?.scrollToExperience) {
    const expSection = document.getElementById('experience-section');
    if (expSection) expSection.scrollIntoView({ behavior: 'smooth' });
  }
  if (location.state?.scrollToEducation) {
    const eduSection = document.getElementById('education-section');
    if (eduSection) eduSection.scrollIntoView({ behavior: 'smooth' });
  }
      }, [location])
    return (
        <>    
        <div className='bg-[#0f3430] h-screen flex items-center px-4 md:px-10 lg:px-40'> 
            <motion.div 
            initial = {{opacity: 0, y : 50}} 
            whileInView ={{opacity: 1, y:0}}
            transition = {{duration: 0.9}}
            className=' text-white  text-3xl md:text-4xl max-w-2xl  leading-10 lg:leading-16 font-sans '
            >
                <p>I'm a <span className='text-[#4ec18a] font-semibold md:font-bold font-dancing'>Full Stack Developer</span> skilled in building robust web applications using modern technologies. </p>
            </motion.div>
          </div>
        <div className='w-full flex justify-center bg-[#0f3430]'>
          <div className='w-[75%] h-[1px] bg-gray-700'></div>
       </div>
            <div className='bg-[#0f3430] grid md:grid-cols-2  text-white px-4 md:px-10 lg:px-40 py-20 md:gap-x-4 lg:gap-x-6' id="about-section">
              <div className='order-2 md:order-1 mt-4 md:mt-0'>
             <img src={pic1} alt="" className='rounded-full h-96 md:h-105  w-[100%] lg:w-[100%] '/>
             </div>
             <div className='flex flex-col justify-center gap-y-4 mt-3 md:mt-0 order-1 md:order-2'>
              <div className='w-10 h-2 rounded-md bg-[#4ec18a]'></div>
              <h2 className='text-3xl font-poppins font-bold'>About</h2>
              <p className='text-gray-300'>I am a passionate full-stack web developer with expertise in building
               responsive and dynamic web applications using technologies such as React.js, Django, Tailwind CSS, 
               and MySQL. I enjoy working on both frontend interfaces and backend logic, turning ideas into 
               real-world solutions that deliver value and impact. I am eager to tackle challenging development
                problems and continuously improve my skills. I am currently seeking opportunities to contribute
                 to innovative teams and grow further as a full-stack developer.

 </p>
                  <div className='mt-4  space-x-4 xl:space-x-7'>
                    <button className='p-2 h-10 xl:h-16 w-24 xl:w-32 rounded-full bg-white text-black hover:bg-[#4ec18a] hover:text-white'
                     onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                    <button className=' p-2 h-10 xl:h-16 w-24 xl:w-32 rounded-full bg-white text-black hover:bg-[#4ec18a] hover:text-white'
                    onClick={() => expertiseRef.current?.scrollIntoView({ behavior: 'smooth' })}>Expertise</button>
                   <button className=' px-1 h-10 xl:h-16 w-24 xl:w-32 rounded-full bg-white text-black hover:bg-[#4ec18a] hover:text-white'
                    onClick={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}>Experience</button>
                  </div>  
             </div>
            </div>
            
                 <div ref={projectRef} className='relative  px-4 md:px-10 lg:px-40 bg-[#4ec18a] text-white  py-10 md:py-20' id="projects-section">
                  <div className='absolute right-20 top-[-28px] bg-white w-6 h-14 rotate-15'></div>
                   <div className='w-12 mb-4 h-2 rounded-md bg-[#0f3430]'></div>
                  <h2 className='font-poppins font-bold text-3xl '>Projects</h2>
                  <motion.div 
                    initial = {{opacity: 0, y:30}}
                   whileInView = {{opacity: 1, y:0}}
                    transition =  {{duration: 1}}
                    className=' mt-7 flex flex-col gap-y-5'
                     >
                     <Link to="/projects/realstate"> <img src={proj1} alt="" className='hover:scale-105 h-96 w-full'></img></Link>
                     <div className='flex items-center gap-4'>
                      <FaHome/>
                      <p>RealState Website  (Zarobi Builders)</p>
                     </div>
                     <Link to="/projects/shopping-cart"> <img src={proj2} alt="" className='hover:scale-105 h-96 w-full'></img></Link>
                    <div className='flex items-center gap-4'>
                     <FaShoppingBag/>
                      <p>E-Commerce Website (FreshCart)</p>
                      </div>
                       <Link to="/projects/gists"> <img src={proj3} alt="" className='hover:scale-105 h-96 w-full'></img></Link>
                    <div className='flex items-center gap-4'>
                     <FaGithub/>
                      <p>Github Gists</p>
                      </div>
                      <Link to="/projects/blogPost"> <img src={proj4} alt="" className='hover:scale-105 h-96 w-full'></img></Link>
                    <div className='flex items-center gap-4'>
                     <FaEdit/>
                      <p>Blogging Website</p>
                      </div>
                   </motion.div>
                    <div className='absolute left-20 bottom-[-24px] bg-white w-6 h-14 z-10 -rotate-15'></div>
                 </div>

                  {/* Education section */}
                   <div ref={educationRef} id="education-section" className='relative  px-4 md:px-10 lg:px-40  bg-[#0f3430] text-white  py-16 md:pt-24'>
                   <div className='w-16 mb-4 h-2 rounded-md bg-[#4ec18a]'></div>
                  <h2 className='font-poppins font-bold text-3xl '>Education</h2>
                  <motion.div 
                    initial = {{opacity: 0, y:30}}
                   whileInView = {{opacity: 1, y:0}}
                    transition =  {{duration: 1}}
                    className=' mt-7 flex flex-col gap-y-10'
                     >
                      <div className='relative'>
                    <FaGraduationCap className='text-3xl absolute text-[#4ec18a]'/>
                    <div className=' h-45 md:h-40  ml-3 border-l-7 border-[#4ec18a]  text-white'>
                      <div className='ml-10 mt-5 space-y-3'>
                      <p className='bg-[#4ec18a] rounded-2xl w-30 text-center'>2018-2020</p>
                      <h2 className='text-2xl'>Intermediate</h2>
                      <p>In Pre-Engineering</p>
                      <p>From Mahtab Khurshid Memorial School & College (Kotha), (Swabi)</p>
                      </div>
                    </div>
                    </div>

                     <div className='relative'>
                    <FaGraduationCap className='text-3xl absolute  text-[#4ec18a]'/>
                    <div className=' h-50 md:h-40  ml-3 border-l-7  border-[#4ec18a]  text-white'>
                      <div className='ml-10 mt-5 space-y-3'>
                      <p className='bg-[#4ec18a] rounded-2xl w-30 text-center'>2021-2025</p>
                      <h2 className='text-2xl'>Bachelor Of Science In Computer Science</h2>
                      <p>From Federal Urdu University Of Arts, Sciences & Technology Islamabad</p>
                      <p>CGPA: 3.60</p>
                    </div>
                    </div>
                    </div>
                   </motion.div>
                 </div>

                 <div
                 initial = {{opacity: 0, y:50}}
                 whileInView ={{opacity:1, y:0}}
                 transtion = {{duration: 0.8}}
                 className='pl-4 md:pl-10 lg:pl-40 text-white font-poppins pt-20 md:pt-16 bg-[#0f3430]' id="expertise-section" ref={expertiseRef}>
                <div className='w-16 mb-4 h-2 rounded-md bg-[#4ec18a]'></div>
                <h2 className='font-poppins text-3xl font-bold'>My Expertise</h2>
                <motion.ul className='list-none mt-10 space-y-5 '>
                    <li className='flex items-center gap-4'><span className='w-16'>Html </span><motion.div 
                    initial = {{width: 0}}
                    whileInView = {{width: '50%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}}
                    viewport = {{once: true}}
                    className='w-1/2 h-4 bg-white'></motion.div>90%</li>
                    <li className='flex items-center gap-4'><span className='w-16'>CSS</span> <motion.div
                      initial = {{width: 0}}
                    whileInView = {{width: '50%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}} 
                      viewport = {{once: true}}
                    className='w-1/2 h-4 bg-white'></motion.div>90%</li>
                    <li className='flex items-center gap-4'><span className='w-16'>Javascript</span> <motion.div
                      initial = {{width: 0}}
                    whileInView = {{width: '33%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}} 
                      viewport = {{once: true}}
                    className='w-1/3 h-4 bg-white'></motion.div>75%</li>
                    <li className='flex items-center gap-4'><span className='w-16'>React JS</span> <motion.div
                      initial = {{width: 0}}
                    whileInView = {{width: '25%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}} 
                      viewport = {{once: true}}
                    className='w-1/4 h-4 bg-white'></motion.div>70%</li>
                    <li className='flex items-center gap-4'><span className='w-16'>Django </span><motion.div
                      initial = {{width: 0}}
                    whileInView = {{width: '25%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}} 
                      viewport = {{once: true}}
                    className='w-1/4 h-4 bg-white'></motion.div>70%</li>
                    <li className='flex items-center gap-4'><span className='w-16'>MySQl</span> <motion.div
                      initial = {{width: 0}}
                    whileInView = {{width: '25%'}}
                    transition = {{duration: 0.8, ease: "easeOut"}} 
                      viewport = {{once: true}}
                    className='w-1/4 h-4 bg-white'></motion.div>70%</li>
                </motion.ul> 
                 </div>

                <div id="experience-section" ref={experienceRef} className="bg-[#0f3430] text-white px-4 md:px-10 lg:px-40 pt-24">
               <div className='w-16 mb-4 h-2 rounded-md bg-[#4ec18a]'></div>
               <h2 className="font-poppins font-bold text-3xl mb-6">Experience</h2>
               <div className="border-l-4 border-[#4ec18a] pl-6">
               <h3 className="text-xl font-semibold">Web Development Intern</h3>
               <p className="text-[#4ec18a] font-medium">Rutech Solutions</p>
               <p className="text-sm italic mb-2">April 2025 – July 2025</p>
              <p className="text-gray-300">
             I completed my Web Development Internship at Rutech Solutions, where I contributed to both 
             frontend and backend development using technologies such as React.js, Django, MySQL, and Tailwind
              CSS. My responsibilities included building user-friendly interfaces, integrating APIs,
               This experience strengthened my practical skills and provided valuable industry-level exposure.
              </p>
           </div>
           <div className="border-l-4 border-[#4ec18a] pl-6 mt-10">
               <h3 className="text-xl font-semibold">Web Development Intern</h3>
               <p className="text-[#4ec18a] font-medium">HH Tech Hub</p>
               <p className="text-sm italic mb-2">July 2025 – August 2025</p>
              <p className="text-gray-300">
            Developed responsive and interactive user interfaces with modern frontend technologies 
            such as Next.js, collaborating with the development team to improve design, performance,
             and overall user experience.
              </p>
           </div>
           </div>
        
        {/* Contact Form */}
                  <div ref={scrollRef} id="contact-form" className='bg-[#0f3430] py-24 text-white px-4 md:px-10 lg:px-40'>
                    <form  ref={form} onSubmit={handleSubmit(OnSubmit)}  className='flex flex-col  border border-white h-full rounded-full items-center gap-y-5 py-10'>
                      <h2 className='font-bold text-3xl'>Get In Touch</h2>
                      <input type="text" name="name" placeholder='Enter your name' className=' border-b text-white p-2 w-[70%] focus:outline:none'
                       {...register('name', {required: 'Name is required', pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: 'Only alphabets are allowed'
                       }}, )}/>
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p> }
                      <input type="tel" name="phone" placeholder='Enter your phone' 
                      className='border-b text-white p-2 w-[70%] focus:outline:none'
                      {...register('phone', {required: "Phone is required", pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numbers are allowed", 
                      }, maxLength: {value: 11, message: 'Phone number should be 11 digits'}})} />
                      {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                      <input type="email"  name="email" placeholder='Enter your email' 
                      className='border-b text-white p-2 w-[70%] focus:outline:none'
                      {...register('email', {required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email must contain @ symbol'}})
                      }/>
                      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                      <textarea type="text" name="message" placeholder='Enter your message' className=' border-b text-white p-2 h-24 w-[70%] focus:outline:none' />
                      <button type="submit"  className='bg-[#4ec18a] text-black w-[35%] border border-transparent cursor-pointer hover:text-white hover:bg-[#0f3430] hover:border-[#4ec18a] py-2 '>Send Message</button>
                    </form>
        
                  </div>
        </>
    )
}
export default Home;