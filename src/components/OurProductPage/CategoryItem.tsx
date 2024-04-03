import Link from "next/link";

interface CategoryItem{
    linkCategory: string
    titleCategory: string
}

function CategoryItem(props: CategoryItem){

    const {linkCategory, titleCategory} = props

    return(
        <li className="list-disc text-[17px] font-sans mb-3 hover:text-gold-200"><Link href={`/ProductCategory/${linkCategory}`}>{titleCategory}</Link></li>
    )
}

export default CategoryItem