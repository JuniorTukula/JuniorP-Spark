
import React, { useState, useEffect, useRef } from 'react';
import Mypicture from './img/mypicture.png';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills from './Components/Skills'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll animation and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine which section is currently in view
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: portfolioRef, id: "portfolio" },
        { ref: contactRef, id: "contact" },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const element = section.ref.current;
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Handle animations for elements that should appear on scroll
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionRef) => {
    setIsMenuOpen(false);
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  
  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: "My Portfolio",
      category: "Web Development",
      description: "",
      image: " "
    },
    {
      id: 2,
      title: " ",
      category: "UI/UX Design",
      description: " ",
      image: " "
    },
    {
      id: 3,
      title: " ",
      category: "Mobile App",
      description: " ",
      image: " "
    },
    {
      id: 4,
      title: " ",
      category: "Web Development",
      description: " ",
      image: " "
    },
    {
      id: 5,
      title: " ",
      category: "Web Development",
      description: " ",
      image: " "
    },
    {
      id: 6,
      title: " ",
      category: "UI/UX Design",
      description: " ",
      image: " "
    }
  ];
  
  // Skills data
 
  
  // Filter categories for portfolio
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];
  
  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);





    
      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1e0d51d1-161b-4b90-9d71-65edccbecf86");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      };
    
      



  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">Spark</a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home', ref: homeRef },
              { id: 'about', label: 'About', ref: aboutRef },
              { id: 'portfolio', label: 'Portfolio', ref: portfolioRef },
              { id: 'contact', label: 'Contact', ref: contactRef }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`text-base font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { id: 'home', label: 'Home', ref: homeRef },
              { id: 'about', label: 'About', ref: aboutRef },
              { id: 'portfolio', label: 'Portfolio', ref: portfolioRef },
              { id: 'contact', label: 'Contact', ref: contactRef }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`text-base font-medium py-2 transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      
     {/* Hero Section */}
     <section 
        ref={homeRef} 
        id="home" 
        className="pt-28 pb-19 md:py-32 bg-gradient-to-br from-indigo-200 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex  flex-col md:flex-row items-center">
            {/* Profile Image - Top on mobile, Left on desktop */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto md:ml-0 md:mr-10 max-w-sm">
                <div className="  absolute inset-0 bg-indigo-100 rounded-lg "></div>
               <img 
                  src={Mypicture} 
                  alt="Paul Banda" 
                  className="relative z-10 rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
            
            {/* Introduction Text - Bottom on mobile, Right on desktop */}
            <div className="w-full md:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.4s'}}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-1000">
                Hello, I am <span className="text-indigo-600">Paul Tukula </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                Full-Stack Web Developer & UI/UX Designer
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I create beautiful, responsive, and user-friendly digital experiences. 
                With expertise in both front-end and back-end development, 
                I deliver complete solutions that help businesses achieve their goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection(portfolioRef)}
                  className="!rounded-button bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="!rounded-button border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* About Section */}
       <section 
        ref={aboutRef} 
        id="about" 
        className="py-20 bg-white"
      >


<h1></h1>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
            About <span className="text-indigo-600">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            {/* Image - Top on mobile, Left on desktop */}
            <div className="w-full md:w-1 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto md:mr-0 md:mr-0 max-w-sm">
                <div ></div>


                  
                 <div>

 


                 </div>
                
              </div>
            </div>
            
            {/* Bio and Skills - Bottom on mobile, Right on desktop */}
            <div className="w-full animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Full-stack web developer with over 3 years of experience, building complete web solutions from user interfaces to server side logic and database integration. 
              During this time, I have learned how important it is to write clean and well-organized code that is easy to read, maintain, 
              and improve. I always try to follow best practices and keep my work simple and efficient. 
              I believe that learning never stops, especially in technology, so I make it a habit to explore new tools, frameworks, 
              and techniques. This helps me stay up to date with the latest trends in web development and allows me to build modern, 
              high-quality solutions that meet user needs and business goals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
              Alongside my technical skills, I value collaboration and believe that strong teamwork plays a key role in successful projects.
               I communicate clearly, listen actively, and always aim to support those I work with. Whether I am partnering with fellow developers,
                designers, or clients, I focus on making sure everyone is aligned and working toward the same goals. 
                I am confident contributing in team discussions, offering constructive feedback, and tackling challenges together. 
                To me, good communication and a positive mindset are just as important as writing great code 
                when it comes to building high-quality software.Ultimately, I am passionate about applying my skills to create meaningful solutions that 
                make a positive and lasting impact in the world.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900"> </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               
              </div>
              
              <Skills/>
            </div>
          </div>
        </div>
      </section>

       {/* Portfolio Section */}
       <section 
        ref={portfolioRef} 
        id="portfolio" 
        className="py-20 bg-gray-100 "
      >
        <div className="container mx-auto px-4">
          <h2 className=" mb-12 text-3xl  font-bold text-center  animate-on-scroll opacity-2 transition-all duration-1000 transform translate-y-10">
            My <span className="text-indigo-800 ">Work</span>
          </h2>
          <p className="text-gray-800 text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
            My recent projects showcasing my skills in web development, UI/UX design, and mobile applications.
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.3s'}}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`!rounded-button m-2 px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                  activeFilter === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-indigo-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0 transform translate-y-10"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-indigo-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <button className="!rounded-button bg-white text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-lg font-medium mx-2 cursor-pointer">
                      <i className="fas fa-eye mr-2"></i>
                      View
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section 
        ref={contactRef} 
        id="contact" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
            Do you have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Fill out the form below, and I will get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-2/5 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.3s'}}>
              <div className="bg-indigo-50 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Blantyre,Malawi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">paultukula@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+265 886446457</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  
                </div>
              </div>
            </div>
            
            {/* Contact Form */}


            
            <div className="w-full md:w-3/5 md:pl-10 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.4s'}}>
              <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 md:p-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      name='name'
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name" required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name='email'
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email" required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name='subject'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject of your message" required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    name='message'
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message" required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="!rounded-button w-full bg-indigo-600 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Spark</h2>
              <p className="text-gray-400">Full-Stack Developer & UI/UX Designer</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About</a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection(portfolioRef); }} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Portfolio</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a>
            </div>
            
            <div className="flex space-x-4">
               
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              */}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Paul Tukula. All Rights Reserved
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="!rounded-button bg-indigo-600 hover:bg-indigo-300 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
      {/* animations css */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};


export default App;

