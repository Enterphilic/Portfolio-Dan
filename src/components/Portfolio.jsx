import React from 'react'
import arrayDestruct from '../asset/portfolio/arrayDestruct.jpg';
import installNode from '../asset/portfolio/installNode.jpg';
import navBar from '../asset/portfolio/navbar.jpg';
import reactParallax from '../asset/portfolio/reactParallax.jpg';
import reactSmooth from '../asset/portfolio/reactSmooth.jpg';
import reactWeather from '../asset/portfolio/reactWeather.jpg';

const portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navBar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        },

    ]
    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0'>
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex item-center justify-center'>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Demo</button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default portfolio