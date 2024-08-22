import React, { useState, useEffect, useRef } from 'react';
import myimage from '../assets/myimage.png';
import myimage3 from '../assets/myimage3.JPG';
import coffee1 from '../assets/coffee1.jpg';
import coffee2 from '../assets/coffee2.jpg';
import coffee3 from '../assets/coffee3.jpg';
import Logo from '../assets/Logo.png';
import system from '../assets/system.jpg';
import resume from '../assets/Besa_Miguel_Resume.pdf';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import EmailIcon from '@mui/icons-material/Email';
import Lux from '../assets/Lux.PNG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animatedSections, setAnimatedSections] = useState({
    profile: false,
    about: false,
    skills: false,
    project: false,
    contact: false
  });
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.id;
          setAnimatedSections(prevState => ({
            ...prevState,
            [section]: true
          }));
        }
      });
    };

    const aboutObserver = new IntersectionObserver(observerCallback, observerOptions);
    if (profileRef.current) {
      aboutObserver.observe(profileRef.current);
    }
    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }
    if (skillsRef.current) {
      aboutObserver.observe(skillsRef.current);
    }
    if (projectRef.current) {
      aboutObserver.observe(projectRef.current);
    }
    if (contactRef.current) {
      aboutObserver.observe(contactRef.current);
    }

    return () => {
      if (aboutObserver) {
        aboutObserver.disconnect();
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openPdf = () => {
    window.open(resume, '_blank');
  };

  return (
    <div>
      <nav className="absolute w-full z-10 pt-4 md:pt-10 md:px-28 xl:px-44">
        <div className="flex justify-between items-center max-w-8xl mx-auto ">
          <div className="text-sm md:text-xl xl:text-4xl md:basis-1/4 text-center flex items-center text-gray-700">   <img src={Logo} alt='Logo' className=' w-12 h-12 md:w-16 md:h-16 xl:w-24 xl:h-24' /> Miguel Besa</div>
          <div className="hidden md:flex space-x-10 xl:space-x-16 text-2xl xl:text-4xl">
            <a href="#about" className="hover:text-gray-400 hover-underline-offset transition duration-100">About</a>
            <a href="#skills" className="hover:text-gray-400 hover-underline-offset transition duration-100">Skills</a>
            <a href="#project" className="hover:text-gray-400 hover-underline-offset transition duration-100">Project</a>
            <a href="#contact" className="hover:text-gray-400 hover-underline-offset transition duration-100">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              &#9776;
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
  <nav className="absolute top-0 right-0 w-3/4 h-auto bg-white shadow-md z-20">
    <div className="flex flex-col p-6 text-xl h-full">
      <button onClick={toggleMenu} className="self-end text-2xl font-bold mb-6">
        &times;
      </button>
      <a href="#about" onClick={toggleMenu} className="mb-4">About</a>
      <a href="#skills" onClick={toggleMenu} className="mb-4">Skills</a>
      <a href="#project" onClick={toggleMenu} className="mb-4">Project</a>
      <a href="#contact" onClick={toggleMenu} className="mb-4">Contact</a>
    </div>
  </nav>
)}

      <section id="profile" ref={profileRef} className={`w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 ${animatedSections.profile ? 'popup-animation' : 'blank-state'}`}>
        <div className="flex flex-col items-center md:flex-row md:justify-center w-full">
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className="w-64 h-96 md:w-64 md:h-96 xl:h-148 xl:w-96 overflow-hidden rounded-full  block mx-auto mb-4 md:mb-0 md:mr-8">
              <img src={myimage3} alt='My Profile' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className="basis-1/2  flex justify-center">
            <div className="text-center pt-10 md:pt-0 md:text-center md:text-xl md:max-w-lg xl:max-w-3xl">
              <div className="text-md xl:text-2xl">Hello, I'm</div>
              <div className="text-4xl xl:text-7xl md:text-5xl font-semibold ">Miguel Besa</div>
              <div className="text-lg md:text-xl xl:text-4xl text-gray-600 mt-2">Frontend Web Developer | UI/UX Designer</div>
              <div className="flex justify-center md:text-center mt-4 space-x-2">
                <button onClick={openPdf} className="border-2 border-black rounded-full text-sm xl:text-2xl font-bold p-2 hover:bg-gray-800 hover:text-white">
                  Download CV
                </button>
                <a href="https://www.linkedin.com/in/miguelbesa2420021214" target="_blank" rel="noopener noreferrer">
  <IconButton 
    size="small" 
    sx={{
      fontSize: { xs: 'small', sm: 'medium', md: 'large', lg: 'x-large', xl: 'xx-large' }
    }}
  >
    <LinkedInIcon 
      sx={{
        fontSize: { xs: '2rem', lg: '2.5rem', xl: '4rem' }
      }} 
    />
  </IconButton>
</a>

                <IconButton size="small"  ><GitHubIcon  sx={{
        fontSize: { xs: '2rem', lg: '2.5rem', xl: '4rem' }
      }}  /></IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" ref={aboutRef} className={`w-full min-h-screen ${animatedSections.about ? 'popup-animation' : 'blank-state'}`}>
        <div className='text-center pt-10'>
          <div className='text-gray-600 xl:text-2xl'>Get to know more</div>
          <div className='font-semibold text-3xl md:text-5xl pt-2 xl:text-7xl'>About me</div>
          <div className='grid grid-cols-1 md:grid-cols-2 pt-10 xl:pt-16 w-full'>
            <div className="w-full flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-96 md:h-96 xl:w-140 xl:h-140 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-8">
                <img src={myimage} alt='My Profile' className='w-full h-full object-cover' />
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-0">
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='border border-black rounded-lg w-auto h-auto py-4 px-2'>
                  <SchoolIcon  sx={{
        fontSize: {  lg: '2.5rem', xl: '3.5rem' }
      }} />
                  <div className='font-semibold text-xl pt-2 xl:pt-4 xl:text-3xl'>College</div>
                  <div className='pt-2 xl:pt-4 xl:text-2xl'>STI College<br></br>Ortigas-Cainta</div> 
                </div>
                <div className='border border-black rounded-lg w-auto h-auto py-4 px-2'>
                  <ComputerIcon sx={{
        fontSize: {  lg: '2.5rem', xl: '3.5rem' }
      }}/> 
                  <div className='font-semibold text-xl pt-2  xl:pt-4 xl:text-3xl'>Education</div>
                  <div className='pt-2  xl:pt-4 xl:px-4 xl:text-2xl'>Bachelor of Science in<br></br> Computer Science</div> 
                </div>
              </div>
              <div className='mt-4 xl:mt-8 text-justify px-4 md:px-8 xl:px-16 xl:text-2xl'>Hi, I'm Miguel Antonio Besa, a Computer Science graduate. I have a strong passion for Frontend Development and UI/UX Design. I am dedicated to continuous improvement in my field. I am eager to enhance my skills in both UI/UX designing and programming. My commitment to growth drives my learning and professional development.</div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" ref={skillsRef} className={`w-full min-h-screen ${animatedSections.skills ? 'popup-animation' : 'blank-state'}`}>
        <div className='pt-10 px-4 md:px-0'>
        <div className="text-gray-600 text-center text-lg xl:text-2xl">My</div>
          <div className='font-semibold text-3xl md:text-5xl xl:text-7xl pt-2 text-center'>Skills</div>
          <div className={`flex flex-col md:flex-row justify-center pt-10 w-full gap-10 ${animatedSections.skills ? 'popup-animation' : ''}`}>
            <div className="w-auto md:w-120 xl:w-160 h-auto overflow-hidden rounded-lg border border-gray-500 m-4 px-4 md:px-0 xl:py-10">
              <div className='pt-8 text-xl md:text-3xl xl:text-5xl font-semibold text-gray-600 text-center'>Frontend Development</div>
              <div className='grid md:grid-cols-2 gap-4 py-8 md:px-20 '>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CodeIcon className='mr-2' sx={{ fontSize: {  lg: '2.5rem', xl: '3rem' }}}/> 
                  HTML 
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'  sx={{ fontSize: {  lg: '2.5rem', xl: '3rem' }}}/> 
                  CSS 
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'  sx={{ fontSize: {  lg: '2.5rem', xl: '3rem' }}}/> 
                  Reactjs
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'  sx={{ fontSize: {  lg: '2.5rem', xl: '3rem' }}}/> 
                  Tailwind
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2' sx={{ fontSize: {  lg: '2.5rem', xl: '3rem' }}}/> 
                  Material Ui
                </div>
              </div>
            </div>
            <div className="w-auto md:w-120 xl:w-160 h-auto overflow-hidden rounded-lg border border-gray-500 m-4 px-4 md:px-0 xl:py-10">
              <div className='pt-8 text-xl md:text-3xl xl:text-5xl font-semibold text-gray-600 text-center'>UI/UX Design</div> 
              <div className='grid md:grid-cols-2 gap-4 py-8 px-4 md:px-24'>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2'  sx={{ fontSize: {  lg: '2rem', xl: '2.5rem' }}}/> 
                  Figma 
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2' sx={{ fontSize: {  lg: '2rem', xl: '2.5rem' }}}/> 
                  Photoshop
                </div>
                <div className='py-2 font-semibold text-lg xl:text-2xl flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2' sx={{ fontSize: {  lg: '2rem', xl: '2.5rem' }}}/> 
                  Illustrator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project" ref={projectRef} className={`w-full min-h-screen ${animatedSections.project ? 'popup-animation' : 'blank-state'}`}>
        <div className='pt-10 px-4 md:px-0'>
          <div className='text-gray-600 text-center text-lg xl:text-2xl'>My Recent</div>
          <div className='font-semibold text-3xl md:text-5xl xl:text-7xl pt-2 text-center'>Projects</div>
          <div className='flex justify-center pt-8 md:px-4'> 
            <div className="border border-gray-500 flex items-center justify-center md:p-10 p-4 rounded-lg">
              <div>
                <img src={coffee1} alt="Coffee1" className=' xl:h-160 xl:w-80 md:h-96 md:w-44 h-52' />
              </div>
              <div>
                <img src={coffee2} alt="Coffee2" className=' xl:h-160 xl:w-80 md:w-44 md:h-96 h-52 md:mx-10'/>
              </div>
              <div>
                <img src={coffee3} alt="Coffee3" className=' xl:h-160 xl:w-80 md:w-44 md:h-96 h-52' />
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-8 px-2'> 
            <div className='border border-gray-500 flex items-center justify-center rounded-lg p-4'>
              <img src={system} alt="System" className=' h-52 md:h-96 xl:h-152'/>
            </div>
          </div>
          <div className='flex justify-center pt-8 px-2'> 
  <div className='flex flex-col border border-gray-500 items-center justify-center rounded-lg p-8'>
    <img src={Lux} alt="Lux" className='h-36 md:h-80 xl:h-130 md:rounded-lg rounded-md'/>
    <a href="https://miguelbesa24.github.io/Luxury-Presence---Project/" target="_blank" rel="noopener noreferrer" className="xl:text-2xl mt-4 border border-black text-black font-semibold py-2 xl:py-4 px-6 xl:px-8 rounded-full transition-colors duration-300 hover:bg-gray-800 hover:text-white">
      Live Demo
    </a>
  </div>
</div>

        </div>
      </section>
      <section id="contact" ref={contactRef} className={`w-full min-h-fit py-10 ${animatedSections.contact ? 'popup-animation' : 'blank-state'}`}>
        <div className="pt-10 px-10 md:px-0">
          <div className="text-gray-600 text-center text-lg xl:text-2xl">Let's Get in Touch</div>
          <div className="font-semibold text-3xl md:text-5xl pt-2 text-center xl:text-6xl">Contact Me</div>
          <div className="flex flex-col md:flex-row text-center items-center justify-center pt-10">
            <div className="px-4 mb-4 md:mb-0 hover:text-gray-400 hover-underline-offset transition duration-100">
              <a href="https://mail.google.com/mail/?view=cm&to=miguelbesa249@gmail.com&su&body" className="flex items-center justify-center xl:text-2xl ">
                <EmailIcon  sx={{ fontSize: {  lg: '2.5rem', xl: '3.5rem' }}} className="mr-2" /> 
                miguelbesa249@gmail.com
              </a>
            </div>
            <div className="px-4 hover:text-gray-400 hover-underline-offset transition duration-100">
              <a href="https://www.linkedin.com/in/miguelbesa2420021214" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center xl:text-2xl">
                <LinkedInIcon sx={{ fontSize: {  lg: '2.5rem', xl: '3.5rem' }}} /> 
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-500 text-center py-4 px-4 text-xs md:text-lg xl:text-2xl">
        Copyright © 2024 Miguel Antonio Besa. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Navbar;
