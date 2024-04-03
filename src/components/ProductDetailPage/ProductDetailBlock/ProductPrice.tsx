import StarReview from "./StarReview"

interface ProductPrice{
    priceProduct: number
    nameProduct: string
}

function ProductPrice(props: ProductPrice) {

    const {priceProduct, nameProduct} = props

    return (
        <>
            <div className="text-4xl mb-5">{nameProduct}</div>
            <div className="product-price flex justify-between items-center">
                <div className="sale-price">
                    {/* <span className="text-slate-400 text-2xl line-through mr-2">$99.00</span> */}
                    <span className="text-gold-200 text-2xl">$ {priceProduct}</span>
                </div>
                {/* <div className="review-star flex text-yellow-500 gap-1">
                    <StarReview />
                    <StarReview />
                    <StarReview />
                    <StarReview />
                    <StarReview />
                </div> */}
            </div>
        </>
    )
}

export default ProductPrice