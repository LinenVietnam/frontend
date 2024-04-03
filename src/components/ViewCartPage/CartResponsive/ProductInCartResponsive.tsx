'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

interface ProductInCartResponsiveProps{
    titleProduct: string
    priceProduct: number
    amountProduct: number
    imageProduct: string
}

function ProductInCartResponsive(props: ProductInCartResponsiveProps) {

    const [totalPrice, setTotalPrice] = useState(0)

    const {imageProduct, titleProduct, priceProduct, amountProduct} = props

    useEffect(() => {
        setTotalPrice(priceProduct * amountProduct)
    }, [])

    function CalcTotalPrice(e: any){
        setTotalPrice(priceProduct * e.target.value)
    }

    return (
        <div className="wrap-product mb-10">
            <div className="flex justify-between mb-4 text-lg">
                <div>Product</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-slate-400 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 basis-1/3 mb-4 text-lg">
                <Image width={100} height={100} src={imageProduct} alt="" className="w-24 h-28 lg:w-20 lg:h-24" />
                <div className="text-lg lg:text-xl text-slate-700">{titleProduct}</div>
            </div>
            <div className="flex justify-between mb-4 text-lg">
                <div>Price</div>
                <div>$ {priceProduct}</div>
            </div>
            <div className="flex justify-between mb-4 text-lg">
                <div>Quantity</div>
                <div>
                    <input type="number" className="bg-transparent border border-slate-400 px-7 py-3 w-[120px]" defaultValue={amountProduct} onChange={CalcTotalPrice} />
                </div>
            </div>
            <div className="flex justify-between mb-4 text-lg">
                <div>Subtotal</div>
                <div>$ {totalPrice}</div>
            </div>
            <hr className="w-full h-0.5 bg-slate-300" />
        </div>
    )
}

export default ProductInCartResponsive