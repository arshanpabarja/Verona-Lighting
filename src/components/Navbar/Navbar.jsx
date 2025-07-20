import React, { useState } from 'react'
import icon2 from '../../assets/images/icon2.png'
import whatsapp2 from '../../assets/images/whatsapp2.png'
import Hamburger from 'hamburger-react';
import bottom from '../../assets/images/bottom.png'
import telegram2 from '../../assets/images/telegram2.png'
import insta2 from '../../assets/images/insta2.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [open, setOpen] = useState(false);
    const [cateStatus, setCateStatus] = useState(false)
    const links = [
        ["درباره ما", "/About"],
        ["محصولات", "/Store"],
        ["خانه", "/"],
    ];
    const c = [
        ['category/چراغ لاینر خطی', 'لاینر '],
        ['category/چراغ مگنتی', 'بلتی'],
        ['category/فضای بیرونی', 'فضای بیرونی'],
        ['category/چراغ رینگو و پنل سقفی', 'رینگو']
    ]
    return (
        <header>
            <nav className='fixed hidden md:block top-0 right-0 left-0 z-500 h-35 bg-[#FFFAE8]'>
                <div className="flex mx-10 h-25 items-center justify-end">
                    <div className="w-[80%] flex items-center justify-center"><img className='w-40' src={icon2} alt="icon" /></div>
                    <div className="flex gap-7 items-center justify-center">
                        <a className="" href="https://www.instagram.com/verona.lighting?igsh=cHB2dmQ4ZGx0eW91">
                            <img className="w-7" src={insta2} alt="" />
                        </a>
                        <a className="" href="https://wa.me/qr/UW5IO56VW7VZM1">
                            <img className="w-7" src={whatsapp2} alt="" />
                        </a>
                        <a className="" href="https://t.me/verona_lighting">
                            <img className="w-7" src={telegram2} alt="" />
                        </a>

                    </div>
                </div>
                <div className="flex flex-row-reverse gap-10 items-center justify-center h-10">
                    <Link to='/' className='text-[#212529] font-[18px]'>خانه</Link>
                    <Link to='/store' className='text-[#212529] font-[18px]'>محصولات</Link>
                    <Link to='/about' className='text-[#212529] font-[18px]'>درباره ما</Link>
                </div>

            </nav>
            <nav className='md:hidden items-center flex-row-reverse flex fixed  top-0 right-0 left-0 z-100 h-17 bg-[#FFFAE8]'>
                <div className="mr-4 z-10">
                    <Hamburger size={25} color="black" toggled={open} toggle={() => setOpen(!open)} />
                </div>
                <div className="w-screen z-1 left-1/14 relative flex items-center justify-center">
                    <img className='w-25' src={icon2} alt="" />
                </div>
            </nav>
            {open && (
                <div className="z-30 top-0 right-0 fixed bg-black/20 h-screen w-screen" onClick={() => setOpen(false)}></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-2/3 h-screen md:hidden border border-white/40 shadow-lg bg-amber-50 ease-in-out transition duration-300 overflow-y-auto z-50 ${open ? "-translate-x-0" : "translate-x-full"}`}>
                <ul className="flex w-full pt-16 flex-col-reverse justify-center">
                    <li onClick={() => setCateStatus(!cateStatus)} className="w-full h-15 text-center border-b border-[#ccc] duration-300">
                        <span className='h-14 select-none flex flex-row-reverse w-full items-center justify-end px-6'>
                            دسته بندی
                            <img
                                className={`w-5 transform transition duration-200 relative right-1/3 mx-auto ${cateStatus ? 'rotate-90' : 'rotate-180'}`}
                                src={bottom}
                            />
                        </span>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${cateStatus ? 'max-h-96' : 'max-h-0'}`}>
                            {c.map(link => (
                                <Link to={link[0]} className='h-14 select-none mx-auto flex border-b border-[#ccc] w-11/12 items-center justify-end px-6'>{link[1]}</Link>
                            ))}
                        </div>
                    </li>

                    {links.map(([name, path]) => (
                        <li key={path} className="w-full h-15 text-center border-b border-[#ccc] duration-300">
                            <Link
                                className="h-14 flex w-full items-center justify-end px-6"
                                to={path}
                                onClick={() => setOpen(false)}
                            >
                                {name}
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar