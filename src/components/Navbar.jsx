import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1a3c2f]/90 backdrop-blur sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 text-white font-bold text-2xl hover:text-[#6ee7b7] transition">
                <a href="">akMALE21</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-100 hover:text-[#6ee7b7] transition">Home</a>
                <a href="#about" className="text-gray-100 hover:text-[#6ee7b7] transition">About</a>
                <a href="#experiences" className="text-gray-100 hover:text-[#6ee7b7] transition">Experiences</a>
                <a href="#projects" className="text-gray-100 hover:text-[#6ee7b7] transition">Projects</a>
            </div>

            {/* Burger Icon */}
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl focus:outline-none"
                >
                ☰
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-[#1a3c2f] shadow-md rounded-b">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-100 hover:text-[#6ee7b7]">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-100 hover:text-[#6ee7b7]">About</a>
            <a href="#experiences" onClick={() => setIsOpen(false)} className="block text-gray-100 hover:text-[#6ee7b7]">Experiences</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-100 hover:text-[#6ee7b7]">Projects</a>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
