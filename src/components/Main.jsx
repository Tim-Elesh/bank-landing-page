import MockupsImage from '../images/image-mockups.png'
import ApiImage from '../images/icon-api.svg'
import BudgetImage from '../images/icon-budgeting.svg'
import OnboardingImage from '../images/icon-onboarding.svg'
import OnlineImage from '../images/icon-online.svg'
import ConfettiImage from '../images/image-confetti.jpg'
import CurrencyImage from '../images/image-currency.jpg'
import PlaneImage from '../images/image-plane.jpg'
import RestaurantImage from '../images/image-restaurant.jpg'


export default function Main(){
    return(
        <main>
            <section className='flex justify-between items-center px-28'>
                <div className='w-1/3'>
                    <h2>Next generation digital banking</h2>
                    <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button></button>
                </div>
                <div className='w-1/3'>
                    <img src={MockupsImage} alt="" />
                </div>
            </section>



            <section className='px-28'>
                <h2 className='text-3xl'>Why choose Easybank?</h2>
                <p className='text-gray-400'>We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.</p>
                <div className='flex items-center justify-between'>
                    <article className='w-1/6'>
                        <img src={OnlineImage} alt="" />
                        <h4>Online Banking</h4>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </article>
                    <article className='w-1/6'>
                        <img src={BudgetImage} alt="" />
                        <h4>Simple Budgeting</h4>
                        <p>See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.</p>
                    </article>
                    <article className='w-1/6'>
                        <img src={OnboardingImage} alt="" />
                        <h4>Fast Onboarding</h4>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </article>
                    <article className='w-1/6'>
                        <img src={ApiImage} alt="" />
                        <h4>Open API</h4>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.</p>
                    </article>
                </div>
            </section>




            <section className='px-28'>
                <h2 className='text-3xl'>Latest Articles</h2>
                <div className='flex items-center justify-between'>
                    <article className='flex flex-col w-1/6'>
                        <img src={CurrencyImage} alt="" />
                        <p>By Claire Robinson</p>
                        <h6>Receive money in any currency with no fees</h6>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </article>
                    <article className='flex flex-col w-1/6'>
                        <img src={RestaurantImage} alt="" />
                        <p>By Wilson Hutton</p>
                        <h6>Treat yourself without worrying about money</h6>
                        <p>Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</p>
                    </article>
                    <article className='flex flex-col w-1/6'>
                        <img src={PlaneImage} alt="" />
                        <p>By Wilson Hutton</p>
                        <h6>Take your Easybank card wherever you go</h6>
                        <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </article>
                    <article className='flex flex-col w-1/6'>
                        <img src={ConfettiImage} alt="" />
                        <p>By Claire Robinson</p>
                        <h6>Our invite-only Beta accounts are now live!</h6>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...</p>
                    </article>
                </div>

            </section>
        </main>
    )
}