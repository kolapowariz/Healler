import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Healler from '/Outdoor.png'


function LandingPage() {
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 500)
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="font-sans container mx-auto">
            {showImage ? <div className='w-full h-full flex justify-center mt-80'>
                <img src='../logo.png' alt="Healler Logo" className='' />
            </div> : <>
                <section className="md:hidden">

                    <img src='../Group.png' alt="Healler" className='w-8 mt-2 ml-4' />
                    <div className="flex flex-col items-center">
                        <h1 className="uppercase w-52 mt-4 mb-8 text-2xl text-center">Meet doctors, find symptoms, all in one place.</h1>
                        <img src="../Frame.png" alt="" className="mb-8" />
                        <Link to='/signup'>

                            <button className="w-72 bg-teal-400 p-2 mb-2 rounded-full h-12 text-white text-lg">Create an account</button>
                        </Link>
                        <Link to='/signin'>

                            <button className="w-72 bg-white-500 mb-2 rounded-full h-10 border border-teal-400 text-gray-800 text-lg">Sign In</button>
                        </Link>

                        <p className="w-80 text-sm p-2 mb-10 text-center">By signing up, you are agreeing to our <a href="" className="text-red-400">Terms of service</a> and <a href="" className="text-red-400">Public Policy.</a> </p>
                    </div>
                </section>

                <section className="hidden md:block">
                    <header className="mt-6">
                        <nav className="flex justify-between items-center">
                            <div className="">

                                <img src="../logo.png" alt="Healler" className="w-28 ml-2" />
                            </div>
                            <ul className="flex justify-around">
                                <li className="p-2 mr-2"><a href="">Home</a></li>
                                <li className="p-2 mr-2"><a href="">Our Services</a></li>
                                <li className="p-2"><a href="">Directory</a></li>
                            </ul>
                            <div className="">

                                <Link to='/signin' ><button className="mr-8">Log In</button></Link>
                                <Link to='/signup'><button className="mr-2 bg-teal-400 p-2 rounded-md text-white">Sign Up</button></Link>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <section className="flex justify-between items-center mt-16">
                            <div className="w-72 ml-2">
                                <p className="text-4xl font-bold">Over <span className="text-teal-400">150,000</span> Medical Articles Written & Peer Reviewed</p>
                                <span className="mt-2 text-gray-500 block text-base">By peer-reviewing every article posted on Healler, you are sure of every post.</span>
                            </div>
                            <div className="w-64 h-80 bg-teal-200 rounded-xl mr-2"></div>
                        </section>
                        <section className="bg-teal-200 mt-24 flex justify-around items-center">
                            <div>
                                <img src={Healler} loading="lazy" alt="Outdoor" className="w-72" />
                            </div>
                            <div className="w-80 mr-4">
                                <p className="text-4xl font-bold">Join Healler Today</p>
                                <span className="text-gray-500 block text-sm text-center mt-2 mb-4">By peer-reviewing every article posted on Healler, you are sure of every post.</span>
                                <div className="flex justify-between items-center">
                                    <img src={Healler} loading="lazy" alt="Vector" className="w-20" />
                                    <div className="flex flex-col">
                                        <a href="" className="bg-teal-300 w-52 h-8 text-white rounded-md text-center">Download on Play Store</a>
                                        <a href="" className="bg-teal-300 w-52 h-8 text-white rounded-md text-center mt-2">Download on App Store</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </section>
            </>}
        </section>
    )
}

export default LandingPage;