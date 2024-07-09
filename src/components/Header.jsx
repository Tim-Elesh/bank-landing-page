import { useState } from 'react';
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export default function Header({initialIcon = hamburger}){    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [icon , setIcon] = useState(initialIcon);

    function iconSwitch(){
        if(icon === hamburger){
            setIcon(close)
        } else{
            setIcon(hamburger)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return(
        <header className='w-full h-24 flex justify-between items-center px-4 text-sm font-bold sm:font-normal sm:text-base sm:px-24'>
            <img src={logo} alt="logotype"/>
            <nav>
                <ul className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 sm:gap-6 sm:flex sm:flex-row sm:relative sm:bg-transparent sm:p-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <li className='border-b-4 py-9 border-white hover:border-b-4 hover:border-emerald-500 duration-500'><a href="#">Home</a></li>
                    <li className='border-b-4 py-9 border-white hover:border-b-4 hover:border-emerald-500 duration-500'><a href="#">About</a></li>
                    <li className='border-b-4 py-9 border-white hover:border-b-4 hover:border-emerald-500 duration-500'><a href="#">Contact</a></li>
                    <li className='border-b-4 py-9 border-white hover:border-b-4 hover:border-emerald-500 duration-500'><a href="#">Blog</a></li>
                    <li className='border-b-4 py-9 border-white hover:border-b-4 hover:border-emerald-500 duration-500'><a href="#">Careers</a></li>
                </ul>
            </nav>

            <button className='hidden sm:flex md:flex lg:flex px-2 sm:px-8 py-2 text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
            <button onClick={iconSwitch} className='flex sm:hidden md:hidden lg:hidden'><img src={icon} alt="" /></button>
        </header>
    )
}