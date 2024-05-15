import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState( false );
    const sidebarRef = useRef( null );

    const toggleSidebar = () => {
        setIsOpen( !isOpen );
        if ( !isOpen ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = ( event ) => {
        if ( sidebarRef.current && !sidebarRef.current.contains( event.target ) ) {
            setIsOpen( false );
            document.body.style.overflow = 'auto';
        }
    };

    useEffect( () => {
        document.addEventListener( "mousedown", handleClickOutside );
        return () => {
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [] );

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

            <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
                <div className="flex items-center">
                    <div>
                        <a href="#" className="text-white font-bold text-lg">Blog App</a>
                    </div>
                    <div className="ml-4">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/add" className="text-white">Nuevo Post</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>

    );
};
