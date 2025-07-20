import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../service/api'
import bottom from '../../assets/images/bottom.png'
import Loading from '../../components/Loading/Loading'
function Product() {
    const [product, setProduct] = useState({})
    const [firstImg, setFirstImg] = useState(null)
    const [isloading, setIsloading] = useState(false)
    const param = useParams()
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setIsloading(true)
        getProduct(param.id).then(res => {
            setProduct(res)
            setFirstImg(res.image)
            setIsloading(false)
        })
    }, [param.id])

    const mainImgSize = { width: 716, height: 716 }
    const thumbSize = { width: 120, height: 120 }
    console.log(menu);
    
    return (
        <div className='md:px-10 w-full'>
            {isloading ? <Loading/> : <> 
            <div className="flex flex-col md:flex-row w-full h-[768px]">
                <div className="w-full h-[90%] flex flex-col">
                    <div className="w-full mt-3 mb-3 text-right">
                        <span className='w-full text-[14px] text-[#212529] px-4'>{product.category}</span>
                    </div>

                    <div className="flex h-full flex-col md:flex-row items-start gap-6">
                        {firstImg && (
                            <div
                                className="bg-gray-100 rounded overflow-hidden flex flex-col items-center justify-center"
                            >
                                <img
                                    className="md:w-full md:px-0 w-10/12 md:h-10/12 object-cover"
                                    src={`https://veronalighting.ir${firstImg}`}
                                    alt="product_image"
                                />
                            </div>
                        )}

                        {/* Thumbnails */}
                        <div className="flex px-4 md:px-0 md:flex-col gap-4">
                            {[product.image2, product.image3, product.image4].map((img, index) => (
                                img && (
                                    <div
                                        key={index}
                                        onClick={() => setFirstImg(img)}
                                        className="bg-gray-100 rounded overflow-hidden cursor-pointer"
                                        style={{ width: thumbSize.width, height: thumbSize.height }}
                                    >
                                        <img
                                            className="w-full h-full object-cover"
                                            src={`https://veronalighting.ir${img}`}
                                            alt={`product_thumb_${index + 2}`}
                                        />
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="grid">
                        <span className='text-right px-4 md:px-0 text-[#212529] font-bold mt-10 mb-4 text-[25px]'>{product.title}</span>
                        <div className="w-full h-full flex flex-col mb-5 md:items-end items-center">
                            <div onClick={() => {setMenu(() => menu ? false : true)}} className="w-[90%] h-15 border border-[#ccc] flex px-4 items-center justify-end">
                                <img className={`w-8 ml-7 mx-auto select-none transition ${menu?'rotate-270':'rotate-90'}`} src={bottom}/>{product.color}
                            </div>
                            {menu && 
                                <div className="w-[90%] h-15 border border-t-0 border-[#ccc] mb-5 flex px-4 items-center justify-end">{product.color2}</div>
                            }
                        </div>
                        <p className={`text-right px-4 md:px-0 text-[#212529] text-[16px] ${menu ? 'hidden' : 'block'}`}>برای خرید در واتساپ پیام دهید</p>
                    </div>
                </div>
            </div>
            <div className="w-full text-right mt-40 mt-3">
                <div className="w-11/12 md:w-full mx-auto border-t mb-10  border-gray-400"></div>
                <div className="px-4 md:px-0">
                <p className='text-right h-10 mb-5 text-[18px] text-[#212529]'>مشخصات</p>
                <p className='w-full pl-4' style={{ textAlign: 'justify', direction: 'rtl' }}>{product.text}</p></div>
            </div>
            <div className="w-11/12 md:w-full mx-auto border-t mt-15 mb-10  border-gray-400"></div>
            </>}
        </div>
    )
}

export default Product
