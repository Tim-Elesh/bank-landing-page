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
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
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




            <section>
                <h2></h2>
                <div>
                    <article>
                    
                    </article>
                    <article>
                    
                    </article>
                    <article>
                    
                    </article>
                    <article>
                    
                    </article>
                </div>

            </section>
        </main>
    )
}