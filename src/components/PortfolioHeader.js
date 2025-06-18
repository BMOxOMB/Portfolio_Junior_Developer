import { useState, useEffect } from 'react';

const PortfolioHeader = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-r  rounded-full flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/imgs/trans_bg.png`}
              alt="Logo"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-[#eba504] to-[#eb4e04] bg-clip-text text-transparent">
            DevPortfolio
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {['home', 'about', 'skills', 'projects'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`capitalize px-3 py-1 rounded-full transition-all ${activeSection === item ? 'bg-[#eba504] text-white' : 'text-gray-600 hover:text-[#eba504] hover:bg-yellow-50'}`}
            >
              {item}
            </button>
          ))}
          <a
            href={`${process.env.PUBLIC_URL}/files/Efrain Perez - CV.pdf`}
            download
            className="px-4 py-2 bg-gradient-to-r from-[#eba504]/50 to-[#eb4e04]/50 text-white rounded-full hover:from-[#eba504] hover:to-[#eb4e04] transition-all shadow-md inline-block"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;

// DONE