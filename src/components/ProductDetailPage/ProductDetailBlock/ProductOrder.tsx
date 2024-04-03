'use client'
import { useEffect, useState } from "react";

interface Product {
    id: string;
    image: string;
    nameProduct: string;
    priceProduct: number;
}


function ProductOrder(props: Product) {
    const [amountProduct, setAmountProduct] = useState(1)
    const handleAmount = (e: any) => {
        setAmountProduct(e.target.value)
    }

    const { id, image, nameProduct, priceProduct } = props
    const totalPrice = amountProduct * priceProduct
    const infoProduct = [{ id, image, nameProduct, priceProduct, amountProduct, totalPrice }]
    const [productList, setProductList] = useState<any[]>([]);

    useEffect(() => {
        const productListString = localStorage.getItem("PRODUCT_LIST");
        console.log(productListString)
        if (productListString) {
            const parsedProductList = JSON.parse(productListString);
            setProductList(parsedProductList);
        }
    }, []);

    const handleClick = () => {
        const updatedProductList = infoProduct.concat(...productList)
        localStorage.setItem("PRODUCT_LIST", JSON.stringify(updatedProductList));
        setProductList(updatedProductList);
    };


    return (
        <div className="product-order flex mt-10 gap-5">
            <input type="number" className="block border border-slate-500 opacity-80 focus:outline-none px-7 text-xl w-[130px] bg-transparent text-slate-500 font-sans" defaultValue={1} onChange={handleAmount} />
            <div className="bg-gold-200 hover:bg-gold-400 transition-all duration-300 ease-in-out text-lg lg:text-xl text-white py-4 lg:py-5 px-12 flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg></span>
                <span>Thêm vào giỏ hàng</span>
            </div>
        </div>
    )
}

export default ProductOrder