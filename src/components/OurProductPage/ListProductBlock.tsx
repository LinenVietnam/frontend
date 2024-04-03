import ProductItem from "./ProductItem"

interface ListProductBlockProps{
    listProduct: any
}

function ListProductBlock(props: ListProductBlockProps) {

    const {listProduct} = props

    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 mt-10 gap-5">
            {listProduct ? listProduct?.map((item: any, index: number) => (
                <ProductItem key={index} idProduct={item.id} imageProduct={item.image} nameProduct={item.nameProduct} priceProduct={item.priceProduct}></ProductItem>
            )) : []}
        </div>
    )
}

export default ListProductBlock