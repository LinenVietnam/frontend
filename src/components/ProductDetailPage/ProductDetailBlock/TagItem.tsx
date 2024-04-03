import Link from "next/link"

interface TagItemProps{
    categoryProduct?: any
}

function TagItem(props: TagItemProps){

    const {categoryProduct} = props

    return(
        <span className="hover:text-gold-200 transition font-bold text-black duration-300 text-lg font-sans mr-2"><Link href={`/ProductCategory/${categoryProduct}`}>{categoryProduct}</Link></span>
    )
}

export default TagItem