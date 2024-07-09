import MockupsImage from '../images/image-mockups.png'
import ApiImage from '../images/icon-api.svg'
import BudgetImage from '../images/icon-budgeting.svg'
import OnboardingImage from '../images/icon-onboarding.svg'
import OnlineImage from '../images/icon-online.svg'
import ConfettiImage from '../images/image-confetti.jpg'
import CurrencyImage from '../images/image-currency.jpg'
import PlaneImage from '../images/image-plane.jpg'
import RestaurantImage from '../images/image-restaurant.jpg'
import BackGround from '../images/bg-intro-desktop.svg'


export default function Main(){
    return(
        <main>
            <section className='flex flex-col sm:flex md:flex lg:flex justify-between items-center px-28 bg-slate-50'>
                <div className='w-1/3 flex flex-col gap-10'>
                    <h2 className='text-6xl text-slate-700'>Next generation digital banking</h2>
                    <p className='text-gray-400'> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className='px-6 py-2 w-1/3 text-white rounded-full bg-gradient-to-r from-emerald-300 to-sky-300'>Request Invite</button>
                </div>
                <div className='w-1/3 absolute'>
                    <img className='absolute w-full h-[140%] top-0 right-0' src={MockupsImage} alt="" />
                    <img className='h-[130%] w-full' src={BackGround} alt=''/>
                </div>
            </section>



            <section className='px-28 py-20 bg-slate-100'>
                <h2 className='text-slate-600 text-4xl pb-8'>Why choose Easybank?</h2>
                <p className='text-gray-400 w-1/3 pb-12'>We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.</p>
                <div className='flex items-center justify-between'>
                    <article className='w-1/6 flex flex-col gap-6'>
                        <img className='w-20' src={OnlineImage} alt="" />
                        <h4 className='text-2xl tracking-normal'>Online Banking</h4>
                        <p className='text-gray-400'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </article>
                    <article className='w-1/6 flex flex-col gap-6'>
                        <img className='w-20' src={BudgetImage} alt="" />
                        <h4 className='text-2xl tracking-normal'>Simple Budgeting</h4>
                        <p className='text-gray-400'>See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.</p>
                    </article>
                    <article className='w-1/6 flex flex-col gap-6'>
                        <img className='w-20' src={OnboardingImage} alt="" />
                        <h4 className='text-2xl tracking-normal'>Fast Onboarding</h4>
                        <p className='text-gray-400'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </article>
                    <article className='w-1/6 flex flex-col gap-6'>
                        <img className='w-20' src={ApiImage} alt="" />
                        <h4 className='text-2xl tracking-normal'>Open API</h4>
                        <p className='text-gray-400'>Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.</p>
                    </article>
                </div>
            </section>




            <section className='px-24 py-16 bg-slate-50'>
                <h2 className='text-4xl pb-8 text-slate-700 w-full'>Latest Articles</h2>
                <div className='flex items-center justify-center gap-48'>
                    <article className='bg-white flex flex-col w-1/6 h-1/3 gap-3'>
                        <img className='rounded-md w-full h-48' src={CurrencyImage} alt="" />
                        <div className='p-4 text-gray-400 flex flex-col gap-4'>
                            <p className='text-sm'>By Claire Robinson</p>
                            <h6 className='text-black'>Receive money in any currency with no fees</h6>
                            <p className='text-sm'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </article>
                    <article className='bg-white flex flex-col w-1/6 h-1/3 gap-3'>
                        <img className='rounded-md w-full h-48' src={RestaurantImage} alt="" />
                        <div className='p-4 text-gray-400 flex flex-col gap-4'>
                            <p className='text-sm'>By Wilson Hutton</p>
                            <h6 className='text-black'>Treat yourself without worrying about money</h6>
                            <p className='text-sm'>Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …</p>
                        </div>
                    </article>
                    <article className='bg-white flex flex-col w-1/6 h-1/3 gap-3'>
                        <img className='rounded-md w-full h-48' src={PlaneImage} alt="" />
                        <div className='p-4 text-gray-400 flex flex-col gap-4'>
                            <p className='text-sm'>By Wilson Hutton</p>
                            <h6 className='text-black'>Take your Easybank card wherever you go</h6>
                            <p className='text-sm'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </article>
                    <article className='bg-white flex flex-col w-1/6 h-1/3 gap-3'>
                        <img className='rounded-md w-full h-48' src={ConfettiImage} alt="" />
                        <div className='p-4 text-gray-400 flex flex-col gap-4'>
                            <p className='text-sm'>By Claire Robinson</p>
                            <h6 className='text-black'>Our invite-only Beta accounts are now live!</h6>
                            <p className='text-sm'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}