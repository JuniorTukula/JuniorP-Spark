
import React, { useState, useEffect, useRef } from 'react';
import Mypicture from './img/mypicture.png';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce solution with payment integration",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20showing%20product%20grid%20layout%20with%20high%20quality%20product%20images%2C%20shopping%20cart%20icon%2C%20search%20functionality%2C%20and%20navigation%20menu%2C%20professional%20UI%20design%2C%20isolated%20on%20light%20background%2C%20centered%20composition&width=600&height=400&seq=1&orientation=landscape"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "Interactive dashboard for financial data visualization",
      image: "https://readdy.ai/api/search-image?query=Financial%20dashboard%20interface%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%20elements%2C%20showing%20stock%20market%20trends%2C%20investment%20portfolio%20analysis%2C%20clean%20modern%20design%20with%20blue%20accent%20colors%2C%20professional%20financial%20app%20UI%2C%20isolated%20on%20light%20background&width=600&height=400&seq=2&orientation=landscape"
    },
    {
      id: 3,
      title: "Health & Fitness App",
      category: "Mobile App",
      description: "Cross-platform mobile application for health tracking",
      image: "https://readdy.ai/api/search-image?query=Health%20and%20fitness%20mobile%20app%20interface%20showing%20workout%20tracking%2C%20nutrition%20logging%2C%20and%20progress%20charts%2C%20clean%20minimal%20design%20with%20green%20accents%2C%20activity%20rings%2C%20step%20counter%2C%20and%20calorie%20tracker%2C%20professional%20mobile%20UI%20design&width=600&height=400&seq=3&orientation=landscape"
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "Web Development",
      description: "Complete overhaul of corporate website with modern design",
      image: "https://readdy.ai/api/search-image?query=Corporate%20website%20homepage%20with%20professional%20business%20design%2C%20featuring%20hero%20section%20with%20company%20imagery%2C%20navigation%20menu%2C%20call-to-action%20buttons%2C%20service%20sections%2C%20and%20testimonials%2C%20modern%20clean%20layout%20with%20blue%20corporate%20color%20scheme&width=600&height=400&seq=4&orientation=landscape"
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      category: "Web Development",
      description: "Comprehensive travel booking solution with reservation system",
      image: "https://readdy.ai/api/search-image?query=Travel%20booking%20website%20interface%20showing%20destination%20search%2C%20flight%20and%20hotel%20booking%20options%2C%20date%20picker%2C%20beautiful%20travel%20imagery%2C%20clean%20modern%20design%20with%20teal%20accents%2C%20professional%20travel%20platform%20UI%20with%20search%20results%20and%20filtering%20options&width=600&height=400&seq=5&orientation=landscape"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "UI/UX Design",
      description: "Data visualization tool for social media performance",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20showing%20engagement%20metrics%2C%20follower%20growth%20charts%2C%20content%20performance%20graphs%2C%20audience%20demographics%2C%20modern%20UI%20design%20with%20purple%20accent%20colors%2C%20data%20visualization%20elements%2C%20professional%20analytics%20interface&width=600&height=400&seq=6&orientation=landscape"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "GraphQL", level: 75 }
  ];
  
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
        className="pt-28 pb-20 md:py-32 bg-gradient-to-br from-indigo-200 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image - Top on mobile, Left on desktop */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto md:ml-0 md:mr-10 max-w-sm">
                <div className="absolute inset-0 bg-indigo-100 rounded-lg "></div>
               <img 
                  src={Mypicture} 
                  alt="Paul Banda" 
                  className="relative z-10 rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
            
            {/* Introduction Text - Bottom on mobile, Right on desktop */}
            <div className="w-full md:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.4s'}}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Hello, I'm <span className="text-indigo-600">Paul Tukula </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                Full-Stack Developer & UI/UX Designer
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
            <div className="w-full md:w-3/5 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 3 years of experience in web development and design, I've helped numerous clients transform their digital presence. I specialize in creating intuitive, accessible, and visually appealing websites and applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My approach combines technical expertise with creative problem-solving. I believe in clean code, thoughtful design, and continuous learning to stay at the forefront of web technologies and trends.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full animate-on-scroll opacity-0 transition-all duration-1000" 
                        style={{
                          width: `${skill.level}%`, 
                          animationDelay: `${0.3 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="!rounded-button bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center cursor-pointer"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-on-scroll opacity-2 transition-all duration-1000 transform translate-y-40">
            My <span className="text-indigo-800
            ">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10" style={{animationDelay: '0.2s'}}>
            Here's a selection of my recent projects showcasing my skills in web development, UI/UX design, and mobile applications.
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

