interface ProductContentProps{
    detailProduct: string
}

function ProductContent(props: ProductContentProps) {

    const {detailProduct} = props

    return (
        <div className="product-content">
            <p className="font-sans text-slate-500 text-lg mt-5">{detailProduct}</p>
        </div>
    )
}

export default ProductContent