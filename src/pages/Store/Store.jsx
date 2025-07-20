import React, { useEffect, useState } from 'react'
import categ1 from '../../assets/images/cate1.jpg'
import categ2 from '../../assets/images/cate2.jpg'
import categ3 from '../../assets/images/cate3.jpg'
import categ4 from '../../assets/images/cate4.jpg'
import Cart from '../../components/Cart/Cart'
import { getProducts } from '../../service/api'
import store from '../../assets/images/store.jpg'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
function Store() {
    const c = [
        [categ1, 'category/چراغ لاینر خطی', 'چراغ لاینر آویز'],
        [categ2, 'category/چراغ مگنتی', 'بلتی'],
        [categ3, 'category/فضای بیرونی', 'چراغ لاینر توکار'],
        [categ4, 'category/چراغ رینگو و پنل سقفی', 'رینگو']
    ]
    const [products, setProducts] = useState([])
    const [isloading, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        getProducts().then(res => {
            setProducts(res)
            setIsloading(false)
        })
    }, [])

    return (
        <div className=''>
            {isloading ? <Loading/> : <> 
            <div className="w-full h-80 relative">
                <img src={store} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full h-full flex flex-col text-right text-white text-[16px] items-end justify-center px-10 bg-gradient-to-t from-black to-transparent">
                    <div className="md:w-2/3 w-full">
                        <p className='text-[32px] font-bold pb-3'>چراغ</p>
                        <p style={{ textAlign: 'justify', direction: 'rtl' }} className="">
                            در اینجا مجموعه‌ای گلچین‌ شده از چراغ ها را خواهید یافت که با تمام سلیقه‌ها و نیازهای سبکی مطابقت دارند .از چراغ های با طراحی نمادین گرفته تا چراغ های نوآورانه، مجموعه ما برای هر خانه‌ای چیزی ارائه می‌دهد .از شما دعوت می‌کنیم تا چراغ ایده‌آل خود را که منعکس‌ کننده سبک شخصی شماست، پیدا کنید.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full md:h-100 h-75 md:px-15 flex flex-wrap">
                {c.map((item, index) => (
                    <Link
                        key={index}
                        className="w-1/2 md:w-1/4 h-full"  // 50% width on phones, 25% on md+
                        to={`${item[1]}`}
                    >
                        <div className="w-full h-full relative">
                            <img
                                src={item[0]}
                                alt={`land${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 flex items-center justify-center text-white font-bold md:text-[35px] text-xl w-full h-1/4 bg-gradient-to-t from-black to-transparent">
                                {item[2]}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-80 md:mt-10 w-full md:justify-center flex flex-wrap gap-1 mb-20">
                {products.map(item => (
                    <Cart key={item.id} {...item} />
                ))}
            </div>
            </>}
        </div>
    )
}

export default Store