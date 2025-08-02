import React, { useRef } from 'react';
import logo from '../assets/images/social_apple_mac_65.png'
import store from '../assets/images/icons8-shopping-bag.gif'
import {
    MagnifyingGlassIcon,
    ShoppingBagIcon
    
} from '@heroicons/react/24/solid'


const Navbar = () => {
    const sidenavRef = useRef();

    const openSideNav = () => {
        sidenavRef.current.style.right = '0';
    };

    const closeSideNav = () => {
        sidenavRef.current.style.right = '-50%';
    };
    const sideNavLinks = [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Airpods',
        'TV & Home',
        'Entertainment',
        'Accessories',
        'Support'
    ];


    return (
        <>
            <nav className="bg-white p-4 backdrop-blur-2xl text-gray-600 sticky top-0 z-30">
                <div className="container flex items-center justify-between lg:justify-center space-x-10 text-[12px]">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: '20px', width: '20px', objectFit: 'contain' }}
                    />

                    <div className="hidden lg:flex mt-1 items-center justify-center space-x-10">
                        {[
                            'Store',
                            'Mac',
                            'iPad',
                            'iPhone',
                            'Watch',
                            'Airpods',
                            'TV & Home',
                            'Entertainment',
                            'Accessories',
                            'Support',
                        ].map((item) => (
                            <p key={item} className="cursor-pointer hover:underline">
                                {item}
                            </p>
                        ))}
                    </div>

                    <div className="flex items-center justify-between space-x-10">
                        <ul className='flex items-center space-x-10'>
                            <li>
                                <MagnifyingGlassIcon style={{height:'20px', width:'24px', color:'black'}} />
                            </li>
                            <li>
                                <ShoppingBagIcon style={{height:'20px', width:'24px', color:'black'}} />
                            </li>
                        </ul>
                        <svg
                            onClick={openSideNav}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mt-[1px] lg:hidden  cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </div>
                </div>
            </nav>

            {/* Side Navigation */}
            <section
                ref={sidenavRef}
                className="fixed z-50 top-0 transition-all duration-1000 bg-white shadow-lg"
                style={{ width: '50%', height: '100vh', right: '-50%' }}
            >
                <div className="text-right p-5">
                    <p onClick={closeSideNav} className="inline cursor-pointer text-xl font-bold">
                        ✕
                    </p>
                </div>
                <ul className="flex flex-col gap-6 items-center text-gray-600">
                    {sideNavLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="hover:underline hover:text-black"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
        </>
    );
};

export default Navbar;
