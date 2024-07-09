import logoBlack from '../images/logoBlack.svg'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="w-full h-32 flex items-center justify-between bg-blue-950 text-white p-10">
            <div className='flex gap-24'>
                <div className='flex flex-col justify-between'>
                    <img src={logoBlack} alt="logotype" />
                    <ul className='flex gap-3'>
                        <li className='hover:text-emerald-500 duration-300'><FaFacebook className='w-6 h-6'/></li>
                        <li className='hover:text-emerald-500 duration-300'><FaYoutube className='w-6 h-6'/></li>
                        <li className='hover:text-emerald-500 duration-300'><FaTwitter className='w-6 h-6'/></li>
                        <li className='hover:text-emerald-500 duration-300'><FaPinterest className='w-6 h-6'/></li>
                        <li className='hover:text-emerald-500 duration-300'><FaInstagram className='w-6 h-6'/></li>
                    </ul>
                </div>
                <div className='flex gap-32'>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">About Us</a></li>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">Contact</a></li>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">Blog</a></li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">Careers</a></li>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">Support</a></li>
                        <li className='hover:text-emerald-500 duration-300'><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
                <div className='pr-10 flex flex-col justify-end items-end gap-4'>
                    <button className='px-6 py-2 w-[70%] text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
                    <p className='text-gray-400 text-right'>© Easybank. All Rights Reserved</p>
                </div>         
        </footer>
    )
}