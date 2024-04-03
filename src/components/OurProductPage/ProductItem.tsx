import Image from "next/image"
import Link from "next/link"

interface ProductItemProps{
    imageProduct: string
    nameProduct: string
    priceProduct: number
    idProduct: string
}

function ProductItem(props: ProductItemProps) {

    const {imageProduct, nameProduct, priceProduct, idProduct} = props

    return (
        <div className="mb-5 w-full">
            <div className="overflow-hidden">
                <Link href={`/OurProduct/${idProduct}`}>
                    <Image loading="lazy" width={600} height={600} src={imageProduct} alt="" className="hover:scale-105 transition duration-300" />
                </Link>
            </div>
            <div className="text-xl mt-5"><Link href="" className="hover:text-gold-200 transition duration-300">{nameProduct}</Link></div>
            <div className="text-xl text-slate-600 flex">$ {priceProduct}</div>
        </div>
    )
}

export default ProductItem