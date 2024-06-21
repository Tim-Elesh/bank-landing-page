import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


export default function Footer(){
    return(
        <footer className="w-full h-32 flex items-center justify-between bg-blue-950 text-white p-10">
            <div className='flex gap-24'>
                <div>
                    <img src={logo} alt="" />
                    <ul className='flex'>
                        <li><img className='stroke-white hover:stroke-emerald-500 duration-300' src={facebook} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={pinterest} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                    </ul>
                </div>
                <div className='flex gap-24'>
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
                <div className='pr-10 flex flex-col justify-end gap-4'>
                    <button className='px-6 py-2 text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
                    <p className='text-gray-400 text-right'>© Easybank. All Rights Reserved</p>
                </div>         
        </footer>
    )
}