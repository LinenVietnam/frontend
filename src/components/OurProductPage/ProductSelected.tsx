interface ProductSelectedProps {
    imageProduct: string
    nameProduct: string
    priceProduct: number
    amountProduct: number
    handleDelete: any
    idProduct: string
}

function ProductSelected(props: ProductSelectedProps) {

    const { imageProduct, nameProduct, priceProduct, amountProduct, handleDelete, idProduct } = props

    return (
        <div className="mt-5 flex gap-5 items-center w-full">
            <div className="w-[90px] h-[90px] bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url(${imageProduct})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} />
            <div className="flex w-[60%]">
                <div className="text-xl hover:text-gold-200 duration-300 transition">
                    <div className="">{nameProduct}</div>
                    <div className="text-base">{amountProduct} x {priceProduct}VND</div>
                    </div>
                <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-slate-400 cursor-pointer" onClick={() => handleDelete(idProduct)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProductSelected