import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import land1 from '../../assets/images/land1.jpg'
import land2 from '../../assets/images/land2.jpg'
import land3 from '../../assets/images/land3.jpg'
import cate1 from '../../assets/images/cate1.jpg'
import cate2 from '../../assets/images/cate2.jpg'
import cate3 from '../../assets/images/cate3.jpg'
import cate4 from '../../assets/images/cate4.jpg'

import Cart from '../../components/Cart/Cart'
import Cart2 from '../../components/Cart/Cart2'

function Landing() {
    const l = [
        [land1, '/product/3', 'چراغ رینگو دایره'],
        [land2, '/product/10', 'چراغ بلتی'],
        [land3, '/product/1', 'چراغ پنل سقفی دایره'],
    ]

    const c = [
        [cate1, 'category/چراغ لاینر خطی', 'چراغ لاینر آویز'],
        [cate2, 'category/چراغ مگنتی', 'بلتی'],
        [cate3, 'category/فضای بیرونی', 'چراغ لاینر توکار'],
        [cate4, 'category/چراغ رینگو و پنل سقفی', 'رینگو']
    ]

    // Dummy products for example
    const popularProducts = [
        { id: 8, title: 'چراغ های تریم لس گچی', image: 'Screenshot_20220413-202805_WhatsApp_PkrKxsG.jpg', category:'فریم هالوژن گچی'},
        { id: 11, title: 'چراغ های لاینر روکار', image: 'Screenshot_20230529_165158_WhatsApp_xQswZnW.jpg', category:'چراغ لاینر خطی'},
        { id: 10, title: ' چراغ مگنتی کمربندی یا belt', image: '41c722dcbdb7332763aff9351bec3822.jpg', category:'	چراغ مگنتی'},
        { id: 7, title: 'چراغ نیزه ای', image: 'Screenshot_20250704_154448_Samsung_Internet.jpg',  category:'فضای بیرونی'},
    ]

    const newProducts = [
        { id: 19, title: 'Gu10 چراغ پایه ثابت', image: '0e91e5fce8d417f685e8d4dbc2520fdb.jpg', category:'Track light چراغ ریلی یا'},
        { id:18, title: 'چراغ ریلی', image: 'b740cd6f216fd6278ac5443aa62637a8.jpg', category:'چراغ لاینر خطی'},
        { id:17, title: 'چراغ فکی توکار', image: '2219d6d20fb9ec71dbb5db15d4cdca98.jpg', category:'روکار و توکار Cob چراغ های'},
        { id:16, title: 'چراغ فکی روکار', image: '81fe23a1e86c310b0b36ed72b363ae79.jpg',  category:'روکار و توکار Cob چراغ های'},
    ]

    return (
        <main>
            {/* Featured Section */}
            <div className="w-full h-[460px] md:flex items-center justify-center">
                {l.map((item, index) => (
                    <div
                        key={index}
                        className="md:w-1/3 relative overflow-hidden group"
                    >
                        <img
                            src={item[0]}
                            alt={`land${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end px-10 pb-20 text-white text-[26px] font-bold z-10">
                            {item[2]}
                        </div>
                        <Link
                            to={item[1]}
                            className="absolute bottom-4 right-5 px-6 py-2 border border-white text-white text-[16px] rounded transition-all duration-300 hover:bg-white hover:text-black z-20"
                        >
                            برو به محصول
                        </Link>
                    </div>
                ))}
            </div>

            {/* Popular Products */}
            <section className="w-full mt-195 px-4 md:mt-20 md:px-10">
                <div className="text-[28px] mb-10 text-center">محصولات پرطرفدار</div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {popularProducts.map((product, i) => (
                        <SwiperSlide key={i}>
                            <Cart2 id={product.id} title={product.title} image={product.image} category={product.category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* New Products */}
            <section className="w-full  mt-16 px-4 md:px-10">
                <div className="text-[28px] mb-10 text-center">محصولات تازه</div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {newProducts.map((product, i) => (  
                        <SwiperSlide key={i}>
                            <Cart2 id={product.id} title={product.title} image={product.image} category={product.category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Categories Section */}
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
        </main>
    )
}

export default Landing
