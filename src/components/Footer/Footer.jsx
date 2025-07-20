import React from 'react'
import icon2 from '../../assets/images/icon2.png'
import insta2 from '../../assets/images/insta2.png'
import whatsapp2 from '../../assets/images/whatsapp2.png'
import telegram2 from '../../assets/images/telegram2.png'

function Footer() {
    return (
        <div dir='rtl' className="row-start-4 px-4 gap-10 flex flex-col w-full mt-20 h-40 bg-gray-800 items-center justify-center">
            <div className="flex gap-10">
                <a className="" href="https://www.instagram.com/verona.lighting?igsh=cHB2dmQ4ZGx0eW91">
                    <img className="w-9" src={insta2} alt="" />
                </a>
                <a className="" href="https://wa.me/qr/UW5IO56VW7VZM1">
                    <img className="w-9" src={whatsapp2} alt="" />
                </a>
                <a className="" href="https://t.me/verona_lighting">
                    <img className="w-9" src={telegram2} alt="" />
                </a>
            </div>
            <p className='text-[#C1C1C1]'>کلیه حقوق مرتبط به این صفحه مربوط به ورونا لایتینگ می باشد طراحی و بهینه سازی آرشان پابرجا</p>
        </div>
    )
}

export default Footer