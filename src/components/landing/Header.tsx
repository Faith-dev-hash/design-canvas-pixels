import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-5 md:gap-[40px] lg:gap-[100px] md:flex-nowrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[20px] md:top-[40px] lg:top-[60px] max-md:px-5 max-md:flex-nowrap">
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/a0d7ae3d5919fc0bdac4bea8de350a83e737593e?placeholderIfAbsent=true"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      
      {/* Mobile and tablet hamburger menu */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Desktop navigation - visible on large screens and up */}
      <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-9 my-auto max-md:max-w-full">
        <a href="#home" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Home
        </a>
        <a href="#about" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          About
        </a>
        <a href="#services" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Services
        </a>
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <a href="#resources" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="self-stretch flex flex-col overflow-hidden items-center justify-center w-[26px] my-auto pt-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/04b400e6d9973fb3f1031b952201b14ca264e1cc?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="aspect-[1] object-contain w-6"
            />
          </div>
        </div>
        <a href="#career" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Career
        </a>
        <a href="#events" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Events
        </a>
      </nav>
      
      <button className="hidden lg:flex justify-center items-center self-stretch gap-2 text-xl text-[#181818] font-semibold whitespace-nowrap bg-[#FFE21B] my-auto px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
        Login
      </button>

      {/* Mobile and tablet menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(255,255,255,0.95)] rounded-[20px] p-6 flex flex-col gap-4">
          <a href="#home" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#resources" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Resources
          </a>
          <a href="#career" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Career
          </a>
          <a href="#events" className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Events
          </a>
          <button className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
