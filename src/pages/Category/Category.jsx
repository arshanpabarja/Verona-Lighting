import React, { useEffect, useState } from 'react'
import categ1 from '../../assets/images/cate1.jpg'
import categ2 from '../../assets/images/cate2.jpg'
import categ3 from '../../assets/images/cate3.jpg'
import categ4 from '../../assets/images/cate4.jpg'
import Cart from '../../components/Cart/Cart'
import { getProducts } from '../../service/api'
import store from '../../assets/images/store.jpg'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
function Category() {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState([])
    const [isloading, setIsloading] = useState(false)
    const param = useParams()

    useEffect(() => {
        setIsloading(true)
        getProducts().then(res => {
            setProducts(res);
            setNewProduct(res.filter(item => item.category === param.name))
            setIsloading(false)
        })
    }, [param.name])


    return (
        <div className=''>
            {isloading ? <Loading /> :
                <>
                    <div className="w-full h-80 relative">
                        <img src={store} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 w-full h-full flex flex-col text-right text-white text-[16px] items-end justify-center px-10 bg-gradient-to-t from-black to-transparent">
                            <span className='text-[32px] font-bold mb-5'>لامپ</span>
                            .در اینجا مجموعه‌ای گلچین‌شده از لامپ‌ها را خواهید یافت که با تمام سلیقه‌ها و نیازهای سبکی مطابقت دارند<br></br> .از لامپ‌های با طراحی نمادین گرفته تا لامپ‌های نوآورانه، مجموعه ما برای هر خانه‌ای چیزی ارائه می‌دهد<br></br> .از شما دعوت می‌کنیم تا لامپ ایده‌آل خود را که منعکس‌کننده سبک شخصی شماست، پیدا کنید
                        </div>
                    </div>
                    <div className="mt-10 w-full flex justify-center flex-wrap gap-7 mb-20">
                        {newProduct.map(item => (
                            <Cart key={item.id} {...item} />
                        ))}
                    </div></>}
        </div>
    )
}

export default Category