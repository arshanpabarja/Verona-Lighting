import React, { useState } from 'react'
import { sendEmail } from '../../service/api'

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = () => {
    sendEmail(formData).then(res => {
      alert(res.message)
    })
  }

  return (
    <div className='flex flex-col items-center md:p-40 justify-center px-5 pt-5 w-full md:px-50'>
      <div className="md:w-1/2 w-full text-right">
        <h1 className='text-[#212529] font-bold text-2xl pb-2'>درباره ما</h1>
        <h1 className='text-[#212529] font-light pb-8 text-2xl'>ورونا لایتینگ</h1>
        <p className='text-[#212529] font-light text-md' style={{ textAlign: 'justify', direction: 'rtl' }}>ورونا لایتینگ، روشنایی با اعتماد ۱۵ ساله ما در ورونا لایتینگ با بیش از ۱۵ سال تجربه تخصصی در زمینه تأمین و فروش انواع محصولات روشنایی، همواره در مسیر روشن‌تر کردن زندگی شما قدم برداشته‌ایم. از روز اول، هدف ما تنها فروش نبود؛ ما به ایجاد اعتماد، کیفیت و نوآوری در هر محصولی که عرضه می‌کنیم، پایبند بوده‌ایم. چه به دنبال یک لامپ ساده خانگی باشید و چه به دنبال یک سیستم روشنایی حرفه‌ای برای پروژه‌های تجاری و صنعتی، تیم ما آماده است تا با مشاوره دقیق و ارائه محصولات باکیفیت، شما را همراهی کند. کیفیت تضمین‌شده ٬قیمت رقابتی ٬پشتیبانی فنی واقعی ٬ارسال سریع و مطمئن ورونا لایتینگ انتخاب کسانیست که به کیفیت، دوام و صداقت اهمیت می‌دهند. به خانواده بزرگ مشتریان ما بپیوندید و روشنایی متفاوتی را تجربه کنید</p>
      </div>
      <div className="md:w-1/2 mt-20 text-right">
        <h1 className='text-[#212529] pb-8 text-2xl font-bold'>ارتباط با ما</h1>
        <form className='grid w-10/12 mx-auto gap-3' onSubmit={handleSubmit}>
          <input
            placeholder='نام'
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='outline rounded pr-4 text-right outline-gray-400 w-full h-10'
            type="text"
          />

          <input
            placeholder='ایمیل'
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='outline rounded pr-4 text-right outline-gray-400 w-full h-10'
            type="email"
          />

          <textarea
            placeholder='پیام'
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='outline rounded pr-4 text-right outline-gray-400 w-full h-24 resize-none'
          />

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className='w-1/4 h-10 bg-gray-700 rounded text-white hover:bg-gray-800 duration-200'
            >
              ارسال
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default About