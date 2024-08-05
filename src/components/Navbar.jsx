import React, { useState, useEffect, useRef } from 'react';
import myimage from '../assets/myimage.png';
import myimage2 from '../assets/myimage2.png';
import coffee1 from '../assets/coffee1.jpg';
import coffee2 from '../assets/coffee2.jpg';
import coffee3 from '../assets/coffee3.jpg';
import Logo from '../assets/Logo.png';
import system from '../assets/system.jpg';
import resume from '../assets/resume.pdf';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import EmailIcon from '@mui/icons-material/Email';

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
      <nav className="absolute w-full z-10 pt-4 md:pt-10 md:px-28">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div className="text-sm md:text-xl md:basis-1/4 text-center flex items-center text-gray-700">   <img src={Logo} alt='Logo' className=' w-12 h-12 md:w-16 md:h-16' /> Miguel Besa</div>
          <div className="hidden md:flex space-x-10 text-2xl">
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
        <nav className="absolute top-10 left-0 w-full bg-white bg-opacity-80 shadow-md z-20">
          <div className="flex flex-col space-y-4 p-6 text-xl">
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#project" onClick={toggleMenu}>Project</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </div>
        </nav>
      )}
      <section id="profile" ref={profileRef} className={`w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 ${animatedSections.profile ? 'popup-animation' : 'blank-state'}`}>
        <div className="flex flex-col items-center md:flex-row md:justify-center w-full">
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className="w-64 h-96 md:w-64 md:h-96 overflow-hidden rounded-full block mx-auto mb-4 md:mb-0 md:mr-8">
              <img src={myimage} alt='My Profile' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="text-center pt-10 md:pt-0 md:text-center md:text-xl md:max-w-lg">
              <div className="text-md">Hello, I'm</div>
              <div className="text-4xl md:text-5xl font-semibold">Miguel Besa</div>
              <div className="text-lg md:text-xl text-gray-600 mt-2">Frontend Web Developer | UI/UX Designer</div>
              <div className="flex justify-center md:text-center mt-4 space-x-2">
                <button onClick={openPdf} className="border-2 border-black rounded-full text-sm font-bold p-2 hover:bg-gray-800 hover:text-white">
                  Download CV
                </button>
                <a href="https://www.linkedin.com/in/miguelbesa2420021214" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small"><LinkedInIcon fontSize='large' /></IconButton>
                </a>
                <IconButton size="small"><GitHubIcon fontSize='large' /></IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" ref={aboutRef} className={`w-full min-h-screen ${animatedSections.about ? 'popup-animation' : 'blank-state'}`}>
        <div className='text-center pt-10'>
          <div className='text-gray-600'>Get to know more</div>
          <div className='font-semibold text-3xl md:text-5xl pt-2'>About me</div>
          <div className='grid grid-cols-1 md:grid-cols-2 pt-10 w-full'>
            <div className="w-full flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-96 md:h-96 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-8">
                <img src={myimage2} alt='My Profile' className='w-full h-full object-cover' />
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-0">
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='border border-black rounded-lg h-40 w-72 md:h-52 md:w-48 pt-4'>
                  <SchoolIcon fontSize='large'/>
                  <div className='font-semibold text-xl pt-2'>College</div>
                  <div className='pt-2'>STI College Ortigas-Cainta</div> 
                </div>
                <div className='border border-black rounded-lg h-40 w-72 md:h-52 md:w-48 pt-4'>
                  <ComputerIcon fontSize='large'/> 
                  <div className='font-semibold text-xl pt-2'>Education</div>
                  <div className='pt-2'>Bachelor of Science in Computer Science</div> 
                </div>
              </div>
              <div className='mt-4 text-justify px-4 md:px-8'>Hi, I'm Miguel Antonio Besa, a Computer Science graduate. I have a strong passion for Frontend Development and UI/UX Design. I am dedicated to continuous improvement in my field. I am eager to enhance my skills in both UI/UX designing and programming. My commitment to growth drives my learning and professional development.</div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" ref={skillsRef} className={`w-full min-h-screen ${animatedSections.skills ? 'popup-animation' : 'blank-state'}`}>
        <div className='pt-10 px-4 md:px-0'>
        <div className="text-gray-600 text-center text-lg">My</div>
          <div className='font-semibold text-3xl md:text-5xl pt-2 text-center'>Skills</div>
          <div className={`flex flex-col md:flex-row justify-center pt-10 w-full gap-10 ${animatedSections.skills ? 'popup-animation' : ''}`}>
            <div className="w-auto md:w-120 h-auto md:h-80 overflow-hidden rounded-lg border border-gray-500 m-4 px-4 md:px-0">
              <div className='pt-8 text-xl md:text-3xl font-semibold text-gray-600 text-center'>Frontend Development</div>
              <div className='grid md:grid-cols-2 gap-4 py-8 md:px-20'>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'/> 
                  HTML 
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'/> 
                  CSS 
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'/> 
                  Reactjs
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'/> 
                  Tailwind
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CodeIcon fontSize='large' className='mr-2'/> 
                  Material Ui
                </div>
              </div>
            </div>
            <div className="w-auto md:w-120 h-auto md:h-80 overflow-hidden rounded-lg border border-gray-500 m-4 px-4 md:px-0">
              <div className='pt-8 text-xl md:text-3xl font-semibold text-gray-600 text-center'>UI/UX Design</div> 
              <div className='grid md:grid-cols-2 gap-4 py-8 px-4 md:px-24'>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2'/> 
                  Figma 
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2'/> 
                  Photoshop
                </div>
                <div className='py-2 font-semibold text-lg flex items-center justify-center md:justify-start'> 
                  <CreateIcon fontSize='medium' className='mr-2'/> 
                  Illustrator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project" ref={projectRef} className={`w-full min-h-screen ${animatedSections.project ? 'popup-animation' : 'blank-state'}`}>
        <div className='pt-10 px-4 md:px-0'>
          <div className='text-gray-600 text-center text-lg'>My Recent</div>
          <div className='font-semibold text-3xl md:text-5xl pt-2 text-center'>Projects</div>
          <div className='flex justify-center pt-8 px-4'> 
            <div className="border border-gray-500 md:flex items-center justify-center p-10 rounded-lg">
              <div>
                <img src={coffee1} alt="Coffee1" className=' h-96 w-44' />
              </div>
              <div>
                <img src={coffee2} alt="Coffee2" className='w-44 h-96 mx-10'/>
              </div>
              <div>
                <img src={coffee3} alt="Coffee3" className='w-44 h-96' />
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-8 px-2'> 
            <div className='border border-gray-500 flex items-center justify-center rounded-lg p-4'>
              <img src={system} alt="System" className=' h-52 md:h-96'/>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" ref={contactRef} className={`w-full min-h-fit py-10 ${animatedSections.contact ? 'popup-animation' : 'blank-state'}`}>
        <div className="pt-10 px-10 md:px-0">
          <div className="text-gray-600 text-center text-lg">Let's Get in Touch</div>
          <div className="font-semibold text-3xl md:text-5xl pt-2 text-center">Contact Me</div>
          <div className="flex flex-col md:flex-row text-center items-center justify-center pt-10">
            <div className="px-4 mb-4 md:mb-0 hover:text-gray-400 hover-underline-offset transition duration-100">
              <a href="https://mail.google.com/mail/?view=cm&to=miguelbesa249@gmail.com&su&body" className="flex items-center justify-center ">
                <EmailIcon fontSize="large" className="mr-2" /> 
                miguelbesa249@gmail.com
              </a>
            </div>
            <div className="px-4 hover:text-gray-400 hover-underline-offset transition duration-100">
              <a href="https://www.linkedin.com/in/miguelbesa2420021214" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <LinkedInIcon fontSize="large" /> 
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-500 text-center py-4 px-4 text-xs md:text-lg">
        Copyright © 2024 Miguel Antonio Besa. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Navbar;
