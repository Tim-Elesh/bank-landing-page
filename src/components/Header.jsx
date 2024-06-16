import logo from '../images/logo.svg'

export default function Header(){
    return(
        <header className='w-full h-24 flex justify-between items-center px-20'>
            <img src={logo} alt="logotype" />
            <nav>
                <ul className='flex items-center justify-center gap-6'>
                    <li className=''><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </nav>

            <button className='px-8 py-2 text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
        </header>
    )
}