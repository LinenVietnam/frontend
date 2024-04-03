'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

interface ProductInCartProps{
    titleProduct: string
    priceProduct: number
    amountProduct: number
    imageProduct: string
    handleDelete: any
    idProduct: string
}

function ProductInCart(props: ProductInCartProps) {

    const [totalPrice, setTotalPrice] = useState(0)

    const {imageProduct, titleProduct, priceProduct, amountProduct, handleDelete,idProduct} = props

    useEffect(() => {
        setTotalPrice(priceProduct * amountProduct)
    }, [])

    function CalcTotalPrice(e: any){
        setTotalPrice(priceProduct * e.target.value)
    }


    return (
        <div className="flex mt-5 px-7 items-center mb-5">
            <div className="flex items-center gap-5 basis-1/3">
                <Image loading="lazy" width={100} height={100} src={imageProduct} alt="" className="w-16 h-20 lg:w-20 lg:h-24" />
                <div className="text-lg lg:text-xl text-slate-700">{titleProduct}</div>
            </div>
            <div className="basis-1/6 font-sans font-medium text-lg lg:text-xl text-slate-700">$ {priceProduct}</div>
            <div className="basis-1/6">
                <input type="number" className="bg-transparent border border-slate-400 focus:border-slate-400 text-slate-400 text-lg w-[100px] font-sans py-2 px-5" defaultValue={amountProduct} onChange={CalcTotalPrice}/>
            </div>
            <div className="basis-1/6 font-sans font-medium text-lg lg:text-xl text-slate-700">$ {totalPrice}</div>
            <div className="basis-1/6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-slate-400 cursor-pointer" onClick={() => handleDelete(idProduct)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default ProductInCart