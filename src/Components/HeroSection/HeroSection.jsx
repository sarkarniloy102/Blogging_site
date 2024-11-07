import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

const HeroSection = () => {

    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section
                style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
                {/* Hero Section  */}
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    {/* Main Content  */}
                    <main>
                        <div className="text-center">
                            <div className="mb-2">
                                {/* Image  */}
                                <div className="flex justify-center">

                                    {
                                        <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
                                        // <img src="https://cdn-icons-png.flaticon.com/256/7417/7417878.png" alt="" />
                                    }
                                </div>
                                {/* Text  */}
                                <h1 className=' text-3xl text-white font-bold'>HumNil-Clicks</h1>
                            </div>
                            {/* Paragraph  */}
                            <p
                                style={{ color: mode === 'dark' ? 'white' : 'white' }}
                                className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            </p>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;