import React from 'react'
import HeroImage from '../asset/herolmage.jpg';
import { Link } from 'react-scroll';

const home = () => {
    return (
        <div name='Home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full pt-24'>

                    <h2 className='text-white text-4xl sm:text-7xl font-bold'>
                        I'm a Front End React Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 3 years of experience building and designing software.
                        currently, i love to work on web application using
                        technologies like
                        React, Tailwind and Next Js
                    </p>
                    <div>


                        <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio


                        </Link>

                    </div>
                </div>


                <div className='ml-2'>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
                </div>
            </div>
        </div>
    )
}

export default home
