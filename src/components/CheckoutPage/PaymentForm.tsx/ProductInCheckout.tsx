interface ProductInCheckoutProps{
    nameProduct: string
    amountProduct: number
    priceProduct: number
}

function ProductInCheckout(props: ProductInCheckoutProps) {

    const {nameProduct, amountProduct, priceProduct} = props

    return (
        <div className="order-item mb-5">
            <div className="flex justify-between mb-5">
                <div className="text-lg md:text-base">{nameProduct} <span className="inline-block ml-3">x
                    {amountProduct}</span></div>
                <div className="text-lg md:text-base">$ {priceProduct}</div>
            </div>
            <hr className="w-full h-[1px] bg-slate-200" />
        </div>
    )
}

export default ProductInCheckout