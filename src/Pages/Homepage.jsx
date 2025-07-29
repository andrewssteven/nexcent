import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Illustration from '../assets/images/Illustration.png'
import icon1 from '../assets/images/Icon.png'
import icon2 from '../assets/images/Icon (1).png'
import icon3 from '../assets/images/Icon (2).png'
import frame from '../assets/images/Frame 35.png'
import icon4 from '../assets/images/Icon (3).png'
import icon5 from '../assets/images/Icon (4).png'
import icon6 from '../assets/images/Icon (5).png'
import icon7 from '../assets/images/Icon (6).png'
import clientLogo1 from '../assets/images/Logo (1).png'
import clientLogo2 from '../assets/images/Logo (2).png'
import clientLogo3 from '../assets/images/Logo (3).png'
import clientLogo4 from '../assets/images/Logo (4).png'
import clientLogo5 from '../assets/images/Logo (5).png'
import clientLogo6 from '../assets/images/Logo (6).png'
import pana from '../assets/images/pana.png'
import tesla from '../assets/images/image 9.png'
import clientLogo7 from '../assets/images/Logo (7).png'
import frame13 from '../assets/images/Frame 13.png'
import image18 from '../assets/images/image 18.png'
import image19 from '../assets/images/image 19.png'
import image20 from '../assets/images/image 20.png'
import right from '../assets/images/Right.png'
import send from '../assets/images/send.png'
import dot from '../assets/images/Dot.png'
import footerlogo from '../assets/Logo3.png'
import socials from '../assets/Socials.png'

const Homepage = () => {
  return (
    <div className='md:my-5 text-neutral-700  '>
        <Navbar/>

        {/*  */}
        <section className=' relative grid grid-cols-1 md:grid-cols-2 mt-4 gap-5 bg-neutral-100  md:gap-[105px]  md:px-20'>
            
            <div className='md:w-[657px] md:h-[276px] space-y-6  p-5'>
                <div className='md:mt-20 space-y-3   '>
                    <p className='text-5xl text-neutral-500 font-semibold'>Lessons and insights</p>
                    <p className='text-green-600 text-5xl font-semibold'>from 8 years</p>
                    <p className='text-[16px] text-neutral-500'>Where to grow your business as a photographer: site or social media?</p>
                </div>
                <Button text={'Register'} className={'bg-green-600 text-white'}/>
            </div>

            <img src={Illustration} alt=""  className='mx-auto px-4 py-4  '/>
            <img src={dot} alt="" className='absolute bottom-3 md:left-[50%] left-[43%]' />

        </section>

        {/* our client */}
        <section className='space-x-2 md:mt-10 p   md:mx-20'>
            <div className='text-center '>
                <h1 className='font-bold text-2xl'>Our Clients</h1>
                <p className='text-[16px] text-neutral-500 mx-10'>We have been working with some Fortune 500 clients</p>
            </div>
            <div className='grid grid-cols-4 place-items-center  md:grid-cols-7  gap-4 mx-4 mt-5  md:mt-4 '>
                <img src={clientLogo1} alt="" className='w-11 h-11'/>
                <img src={clientLogo2} alt="" className='w-11 h-11'/>
                <img src={clientLogo3} alt="" className='w-11 h-11'/>
                <img src={clientLogo4} alt="" className='w-11 h-11'/>
                <img src={clientLogo5} alt="" className='w-11 h-11'/>
                <img src={clientLogo6} alt="" className='w-11 h-11'/>
                <img src={clientLogo3} alt="" className='w-11 h-11'/>
            </div>
        </section>

        {/* manage community  */}
        <section className='md:mx-20 mt-10 '>

            <div className='text-center '>
                <h1 className='text-2xl font-semibold '>Manage your entire community <br/> in a single system</h1>
                <p className='text-[16px] text-neutral-500 '>Who is Nextcent suitable for?</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 mx-10 md:mx-0 gap-20 mt-10'>
                
                <div className='flex flex-col space-y-2 text-center items-center shadow-md rounded-md p-3 '>
                    <img src={icon1} alt="" className='h-[70px] w-[70px] '/>
                    <h1 className='2xl font-semibold'>Membership Organisations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col space-y-2 text-center items-center shadow-md rounded-md p-3 '>
                    <img src={icon2} alt=""  className='h-[70px] w-[70px]  '/>
                    <h1 className='2xl font-semibold'>National Associations</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col space-y-2 text-center items-center shadow-md rounded-md p-3 '>
                    <img src={icon3} alt="" className='h-[70px] w-[70px]  '/>
                    <h1 className='2xl font-semibold'>Clubs And Groups</h1>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>

        </section>


        {/* unseen spending */}
        <section className='mt-10 grid grid-cols-1 md:grid-cols-2 md:mx-20  p-4  '>
            <img src={frame} alt="" />
            
            <div className='space-y-3 my-auto '>
                <h1 className='text-3xl font-bold '>The unseen of spending three years at Pixelgrade</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ullam ea modi ex repudiandae quaerat. Omnis voluptatem cupiditate corporis cum officia quo hic odio ipsa ratione iure obcaecati repudiandae, suscipit ipsam libero dolorum tempora ad aut nostrum. Animi, facilis est.</p>
            <Button text={'Learn More'} className={'bg-green-600 text-white'}/>
            </div>
            
        </section>

        {/* business reinvent */}
        <section className='md:px-20 bg-neutral-100    grid grid-cols-1 md:grid-cols-2 p-4 md:h-72 gap-4 md:gap-0'>
            <div className='mx-auto my-auto space-y-3'>
                 <h1 className='text-4xl font-semibold '>Helping a local</h1>
                 <p className='text-4xl font-semibold  text-green-600  '>business reinvent itself</p>
                 <p className='text-[16px] text-neutral-500'>We reached here with our hard work and dedication</p>
            </div>

            <div className='grid grid-cols-2  md:mx-auto  my-auto gap-10 md:gap-14'>
                <div className='flex gap-2'>
                    <img src={icon4} alt="" className='h-12  w-12 ' />
                    <div>
                    <h1 className='font-semibold text-2xl '>2,245,341</h1>
                    <p>Members</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={icon5} alt="" className='h-12  w-12 ' />
                    <div>
                    <h1 className='font-semibold text-2xl '>46,328</h1>
                    <p>Clubs</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={icon6} alt="" className='h-12  w-12 '/>
                    <div>
                    <h1 className='font-semibold text-2xl '>828,867</h1>
                    <p>Event Bookings</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={icon7} alt="" className='h-12  w-12 '/>
                    <div>
                    <h1 className='font-semibold text-2xl '>1,926,436</h1>
                    <p>Payments</p>
                    </div>
                </div>
            </div>

        </section>

        {/*  */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4  md:mx-20 '>
            <img src={pana} alt="" />
            
            <div className='space-y-6 my-auto'>
                <h1 className='text-3xl font-semibold'>How to design your site footer like we did</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio est deleniti ab numquam dignissimos perferendis voluptates beatae. Veniam consequuntur, magni pariatur sed amet maxime quasi eligendi ab inventore. Iste illo eum quidem ipsa beatae magnam commodi laboriosam pariatur. Tempore, quas?</p>
                <Button text={"Learn More"} className={'bg-green-600 text-white'}/>
            
            </div>
        </section>

        {/* tesla */}
        <section className='md:px-20 p-4 md:mt-10 bg-neutral-100  mt-4 grid grid-cols-1 md:grid-cols-2 '>
            
            <div className='mx-auto '><img src={tesla} alt="" /></div>

            <div className='space-y-2 my-auto '>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit debitis dolore ad maxime. Tempore, suscipit consectetur. Laborum, fuga nulla perferendis eius aliquam impedit sequi molestias nisi reiciendis dicta modi at ab fugiat itaque vitae sint, alias consectetur accusamus perspiciatis ad iste natus? Sed, tempora! Cupiditate aut sint vitae odio, veniam ullam enim quibusdam optio accusamus quisquam iste corrupti earum quod.</p>
               <p className='font-semibold text-green-600 text-2xl '>Tim Smith</p>
               <p>British Dargon Boat Racing Association</p>
                
                <div className='grid grid-cols-4 md:grid-cols-8 gap-2 mt-3 md:mt-4 items-center'>
                    <img src={clientLogo7} alt="" />
                    <img src={clientLogo2} alt="" />
                    <img src={clientLogo3} alt="" />
                    <img src={clientLogo4} alt="" />
                    <img src={clientLogo5} alt="" />
                    <img src={clientLogo6} alt="" />
                    <img src={frame13} alt="" className='md:col-span-2 col-span-4 '/>
                </div>
            </div>

        </section>

        {/* new marketing  */}
        <section className='md:mx-20 mt-2 md:mt-5 '>

            <div className='flex flex-col items-center space-y-2 p-4'>
                <h1 className='mx-4 md:mx-0 text-center  text-3xl font-semibold '>Caring is the new marketing</h1>
                <p className='text-center '>The Nextcent blog is the best place to read the latest membership insights,<br /> trends and more. See who's joining the community,<br/> reacd about how our community are increasing their membership income and lot's more.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 mx-2  md:mx-10'>

                <div className='relative mx-auto '>
                    <img src={image18} alt="" className='rounded-md h-[80%]'/>
                    <div className='rounded-md  flex-col flex gap-4 py-2 bg-white p-5    absolute w-[90%] shadow-md left-3 bottom-0 font-semibold '>
                        <p className='text-center '>Creating Streamlined Safeguarding Processes with OneRen</p>
                        <div className='flex space-x-2 justify-center cursor-pointer '>
                            <p className='text-green-600  font-semibold space-x-1'>Readmore</p>
                            <img src={right} alt="" width={30}/>
                        </div>
                    </div>
                </div>

                <div className='relative mx-auto '>
                    <img src={image19} alt="" className='rounded-md h-[80%]'/>
                    <div className='rounded-md   flex-col flex gap-4 py-2 bg-white p-5    absolute w-[90%] shadow-md left-3 bottom-0 font-semibold '>
                        <p className='text-center '>What are you safeguarding responsibilities and how can you manage them?</p>
                        <div className='flex space-x-2 justify-center cursor-pointer '>
                            <p className='text-green-600  font-semibold space-x-1'>Readmore</p>
                            <img src={right} alt="" width={30}/>
                        </div>
                    </div>
                </div>

                <div className='relative mx-auto '>
                    <img src={image20} alt="" className='rounded-md h-[80%]'/>
                    <div className='rounded-md  flex-col flex gap-4 py-2 bg-white p-5 absolute w-[90%] shadow-md left-3 bottom-0 font-semibold '>
                        <p className='text-center '>Revamping the Membership Model with Triathion Australia</p>
                        <div className='flex justify-center space-x-2 cursor-pointer'>
                            <p className='text-green-600  font-semibold space-x-1'>Readmore</p>
                            <img src={right} alt="" width={30}/>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        {/* footer */}
        <section className='md:mt-5'>
            <div className='grid place-items-center space-y-5 p-5 md:px-20 '>
                <h1 className='md:text-6xl text-4xl text-center '>Pellentesque suscipit <br /> fringilla libero eu.</h1>
                <Button text={"Get a Demo"} icon={right} className={'gap-2 flex bg-green-600 text-white p-4 '}/>
            </div>

            <footer className='bg-neutral-800 gap-6 grid grid-cols-1 md:grid-cols-6 md:px-20 px-4 text-white py-8 md:py-15  md:h-81 '>
                <div className='col-span-2 space-y-8 '>
                    <img src={footerlogo} alt="" />
                    <div>
                        <p>Copyright &copy; 2020 Nexcent ltd.</p>
                        <p>All rihts reserved</p>
                    </div>
                    <div className='flex space-x-3'>
                        <img src={socials} alt="" />
                    </div>

                </div>
                
                <div className='space-y-3 '>
                    <h1 className='text-2xl font-semibold '>Company</h1>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonies</p>
                </div>

                <div className='space-y-3 '>
                    <h1 className='text-2xl font-semibold '>Support</h1>
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>

                <div className='col-span-2 space-y-3 '>
                    <h1 className='text-2xl font-semibold '>Stay up</h1>
                    <div className='rounded-md bg-gray-500   text-gray-300 relative '>
                    <input type="text" placeholder='Your email address' className='outline-0 px-3 p-1 md:w-[95%] '/>
                    <img src={send} alt="" className='absolute right-2 bottom-2 h-4 w-4 cursor-pointer ' />
                    </div>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default Homepage