'use client'
import Link from "next/link"

interface RelatedProductItemProps{
    linkImage: string
    nameProduct: string
    salePrice?: number
    realPrice: number
    fid: string
}

function RelatedProductItem(props: RelatedProductItemProps) {

    const {linkImage, nameProduct, salePrice, realPrice, fid} = props

    return (
        <div className="related-products-item w-full">
            <Link href={`/OurProduct/${fid}`} className="block w-full max-h-[400px] overflow-hidden">
                <div style={{
                    backgroundImage: `url(${linkImage})`
                }} className="w-full h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat hover:scale-110 transition duration-500">
                </div>
            </Link>
            <div className="mt-5 text-2xl text-center font-semibold"><Link href={`/OurProduct/${fid}`} className="hover:text-gold-200 transition duration-300">{nameProduct}</Link></div>
            <div className="mt-3 text-center text-xl font-semibold">
                {/* <span className="text-slate-400 text-xl line-through mr-2">$99.00</span> */}
                <span className="text-slate-600 text-xl">$ {realPrice}</span>
            </div>
        </div>
    )
}

export default RelatedProductItem