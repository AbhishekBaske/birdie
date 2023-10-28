import React, { useState, useEffect } from 'react';
import logo from '../assets/roller-logo.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/login');
    }
        
    const handleSignUp = () => {
        navigate('/register');
    }
    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            setShow(true);
        } else {
            setShow(false);
        }
        
        // Add an event listener to handle window resize
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array, so this effect only runs once
    useEffect(() => {
        const navbarLinks = document.querySelectorAll('.links');
        if(view){
            navbarLinks.forEach((link) => {
                link.style.display = 'flex';
            })
        }else{
            navbarLinks.forEach((link) => {
                link.style.display = 'none';
            })
        }
        
    },[view])
    function handleClick(){
        setView(!view);
    }
    return (
        <div className="navbar">
            {show ? (
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className="navbar__links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="navbar__buttons">
                        <button className='signIn' onClick={handleSignIn}>Sign In</button>
                        <button className='signUp' onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
            ) : (
                
                <div>
                <div className="navbar__hamburger">
                    <div className="navbar__ham">
                        <div className="navbar__logo">
                            <img className='logo' src={logo} alt="logo" />
                        </div>
                        <div className='hamburger__menu'>
                            <img className='burgerIcon' onClick={handleClick} src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="menu" />
                        </div>
                    </div>
            
                    <div className="navbar__links1">
                        <a className="links" href="/">Home</a>
                        <a className="links" href="/about">About</a>
                        <a className="links" href="/services">Services</a>
                        <a className="links" href="/contact">Contact</a>
                        <a href="./login" className="links linksignin" onClick={handleSignIn}>Sign In</a>
                        <a href="./register" className="links linksignup" onClick={handleSignUp}>Sign Up</a>
                    </div>
                </div>
                
                </div>
            )}
        </div>
    );
};
