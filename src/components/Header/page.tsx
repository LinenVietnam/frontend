'use client'
import Image from "next/image"
import Logo from "./Logo"
import { useEffect, useState } from "react"
import Link from "next/link"

function Header() {

    const [isShowMenu, setIsShowMenu] = useState(false)
    const [menuClass, setMenuClass] = useState('hidden fixed right-0 bottom-0 h-[100vh] w-[300px] bg-dark px-12 py-20')

    const showMenu = () => {
        setIsShowMenu(true)
    }
    const closeMenu = () => {
        setIsShowMenu(false)
    }

    useEffect(() => {
        if(isShowMenu === true){
            setMenuClass('ct-topmenu-expanded fixed right-0 bottom-0 h-[100vh] w-[300px] bg-dark px-12 py-20')
        } 
        if(isShowMenu === false){
            setMenuClass('hidden fixed right-0 bottom-0 h-[100vh] w-[300px] bg-dark px-12 py-20')
        }
    }, [isShowMenu])

    return (
        <>
            <header className="flex justify-between align-middle items-center px-2 sm:px-4 md:px-8 lg:px-14">
                <Logo></Logo>
                <div className="menu flex gap-7 tracking-wide">
                    <div className="md:block hidden">
                        <ul className="flex gap-5 text-base">
                            <li className="border-b-2">
                                <Link href={'/'} className="relative">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex w-full">
                                    <div className="group relative cursor-pointer">
                                        <div className="flex items-center justify-between">
                                            <a className="menu-hover text-base font-medium text-black">
                                                Pages
                                            </a>
                                        </div>
                                        <div className="invisible absolute z-50 flex flex-col py-1 px-6 text-gray-800 shadow-xl group-hover:visible w-[200px]">
                                            <Link className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2" href={'/AboutUs'}>About Us</Link>
                                            {/* <a className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Our
                                                Services</a>
                                            <a className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Our
                                                Team
                                            </a>
                                            <a className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2">FAQs
                                            </a>
                                            <a className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Pricing
                                            </a>
                                            <a className="my-2 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Newsletter
                                                Popups
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="hover:border-b-2 transition-all ease-in-out duration-100"><a href="">Portfolio</a></li>
                            <li className="hover:border-b-2 transition-all ease-in-out duration-100"><a href="">Blog</a></li>
                            <li className="hover:border-b-2 transition-all ease-in-out duration-100"><a href="">Shop</a></li>
                            <li className="hover:border-b-2 transition-all ease-in-out duration-100"><a href="">Contact</a></li> */}
                        </ul>
                    </div>
                    <div className="flex gap-5">
                        <Link href={'/ViewCart'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </Link>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7" id="search-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div id="ct-toggle-top-menu" onClick={showMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={menuClass} id="ct-top-menu">
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 ml-auto mb-5" onClick={closeMenu}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className="text-white mb-2 text-3xl">Menu</div>
                    <div className="w-full h-0.5 bg-white mb-10" />
                    <div className="text-white text-lg mb-2"><Link href={'/'}>Home</Link></div>
                    <div className="text-white text-lg mb-2"><Link href={'/AboutUs'}>About Us</Link></div>
                    <div className="text-white text-lg mb-2"><Link href={'/OurProduct'}>Our Products</Link></div>
                </div>
            </header>
        </>
    )
}

export default Header