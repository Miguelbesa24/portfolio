import React, { useState, useEffect } from 'react';
import myimage from '../assets/myimage.png';
import myimage2 from '../assets/myimage2.png';
import myresume from '../assets/myresume.pdf';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openPdf = () => {
    window.open(myresume, '_blank');
  };

  return (
    <div>
    <nav className="absolute w-full z-10 pt-4 md:pt-10 md:px-28">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
        <div className="text-xl md:text-3xl md:basis-1/4 text-center">Uel</div>
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
       <section id="profile" className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-center w-full">
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className="w-64 h-96 md:w-64 md:h-96 overflow-hidden rounded-full block mx-auto mb-4 md:mb-0 md:mr-8">
              <img src={myimage} alt='My Profile' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className={`basis-1/2 ${animate ? 'popup-animation' : ''}`}>
            <div className="text-center pt-10 md:pt-0 md:text-center md:text-xl md:max-w-lg">
              <div className={`text-md ${animate ? 'popup-animation' : ''}`}>Hello, I'm</div>
              <div className={`text-5xl font-semibold ${animate ? 'popup-animation' : ''}`}>Miguel Besa</div>
              <div className={`text-xl text-gray-600 mt-2 ${animate ? 'popup-animation' : ''}`}>Frontend Web Developer | UI/UX Designer</div>
              <div className={`flex justify-center md:text-center mt-4 space-x-2 ${animate ? 'popup-animation' : ''}`}>
                <button onClick={openPdf} className="border-2 border-black rounded-full text-sm font-bold p-2 hover:bg-gray-800 hover:text-white">
                  Download CV
                </button>
                <a href="https://www.linkedin.com/in/miguel-antonio-besa-496b97299" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small"><LinkedInIcon fontSize='large' /></IconButton>
                </a>
                <IconButton size="small"><GitHubIcon fontSize='large' /></IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="w-full min-h-screen">
        <div className='text-center pt-10'>
          <div className='text-gray-600'>Get to know more</div>
          <div className='font-semibold text-3xl md:text-5xl pt-2'>About me</div>
          <div className='grid grid-cols-1 md:grid-cols-2 pt-10 w-full'>
            <div className="w-full flex justify-center">
              <div className="w-48 h-48 md:w-96 md:h-96 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-8">
                <img src={myimage2} alt='My Profile' className='w-full h-full object-cover' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center px-4 md:px-0'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='border border-black rounded-lg h-24 w-24 md:h-52 md:w-48'>Content 1</div>
                <div className='border border-black rounded-lg h-24 w-24 md:h-52 md:w-48'>Content 2</div>
              </div>
              <div className='mt-4'>Additional Info</div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className='w-full min-h-screen'>
    <div className='pt-10'>
        <div className='font-semibold text-3xl md:text-5xl pt-2 text-center'>Skills</div>
        <div className='flex flex-col md:flex-row justify-center pt-10 w-full gap-10'>
            <div className="w-auto md:w-120 h-auto md:h-80 overflow-hidden rounded-lg border border-black m-4">
                <div className='pt-8 text-xl md:text-3xl font-semibold text-gray-600 text-center'>Frontend Development</div>
                <div className='grid md:grid-cols-2 gap-4 py-8 px-4 md:px-24 text-center'>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'> <CodeIcon fontSize='large'/> HTML </div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'> <CodeIcon fontSize='large'/> CSS </div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'> <CodeIcon fontSize='large'/> Reactjs</div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'> <CodeIcon fontSize='large'/> Tailwind</div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'> <CodeIcon fontSize='large'/> Material Ui</div>
                </div>
            </div>
            <div className="w-auto md:w-120 h-auto md:h-80 overflow-hidden rounded-lg border border-black m-4">
                <div className='pt-8 text-xl md:text-3xl font-semibold text-gray-600 text-center'>UI/UX Design</div> 
                <div className='grid md:grid-cols-2 gap-4 py-8 px-4 md:px-24 text-center'>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'><CreateIcon fontSize='medium'/> Figma </div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'><CreateIcon fontSize='medium'/> Photoshop</div>
                    <div className='py-2 font-semibold text-lg flex items-center justify-center'><CreateIcon fontSize='medium'/> Illustrator</div>
                </div>
            </div>
        </div>
    </div>
</section>



      <section id="project" className='w-full min-h-screen'>
        <div>Section 4</div>
      </section>
      <section id="contact" className='w-full min-h-screen'>
        <div>Section 5</div>
      </section>
    </div>
  );
};

export default Navbar;