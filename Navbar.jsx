import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // assuming you’re using the logo somewhere

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Left nav links */}
        <div className="hidden md:flex space-x-6">
        <Link to="/hero" className="hover:text-neutral-200">Home</Link>
        <Link to="/projects" className="hover:text-neutral-200">Vitals</Link>

        <Link to="/profile" className="hover:text-neutral-200">Profile</Link>
        <Link to="/settings" className="hover:text-neutral-200">Settings</Link>
        <Link to="/community" className="hover:text-neutral-200">Community</Link>
        <Link to="/Workout" className="hover:text-neutral-200">Posture</Link>



        </div>

        {/* Right nav buttons */}
        <div className="hidden md:flex space-x-4 items-center">

        
          
          <Link to="/hero" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
