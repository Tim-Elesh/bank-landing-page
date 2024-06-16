import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


export default function Footer(){
    return(
        <footer className="w-full h-24 flex items-center justify-between bg-blue-950 text-white p-10">
            <div className='flex gap-4'>
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
                <div className='flex gap-4'>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
                <div>
                    <button className='px-6 py-2 text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>         
        </footer>
    )
}