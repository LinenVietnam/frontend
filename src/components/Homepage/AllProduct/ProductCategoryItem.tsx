'use client'
import Image from "next/image"
import Link from "next/link"
interface ProductCategoryItemProps{
    linkProductCateogryItem: string
    titleProductCateogryItem: string
    categorySearch: string
}

function ProductCategoryItem(props: ProductCategoryItemProps) {
    const {linkProductCateogryItem, titleProductCateogryItem, categorySearch} = props
    return (
        <div className="product-item">
            <Link href={`/ProductCategory/${categorySearch}`} className="w-full block overflow-hidden mb-5">
                <Image loading="lazy" width={600} height={480} alt="" src={linkProductCateogryItem} className="hover:scale-105 transition duration-300" />
            </Link>
            <Link href={`/ProductCategory/${categorySearch}`} className="text-3xl ">{titleProductCateogryItem}</Link>
        </div>
    )
}

export default ProductCategoryItem