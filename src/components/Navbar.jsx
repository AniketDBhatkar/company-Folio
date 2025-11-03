import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="w-20">
                    <img src={logo} />
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/services" className="hover:text-blue-600">Services</Link>
                    <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                </div>

                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white px-6 py-3 space-y-3 flex flex-col gap-2">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                    <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
