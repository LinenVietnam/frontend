'use client'
import { useEffect, useRef, useState } from "react";
import ProductInCart from "./ProductInCart"

interface Product {
    nameProduct: string;
    priceProduct: number;
    amountProduct: number;
    image: string;
    id: string
}

function Cart() {

    const [productInCart, setProductInCart] = useState<any | null>(null)
    let productList = productInCart ? JSON.parse(productInCart) : [];
    const [productChange, setproductChange] = useState(productList)

    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [productChange])

    const handleDelete = (id: string) => {
        const productDelete = productList.filter((item: any) => item.id !== id)
        setproductChange(productDelete)
        localStorage.setItem("PRODUCT_LIST", JSON.stringify(productDelete))
    }

    return (
        <section id="cart" className="w-[90%] mx-auto mt-20 md:block hidden">
            <div className="row">
                <div className="flex py-5 px-7 bg-white">
                    <div className="text-base lg:text-lg basis-1/3">Product</div>
                    <div className="text-base lg:text-lg basis-1/6">Price</div>
                    <div className="text-base lg:text-lg basis-1/6">Quantity</div>
                    <div className="text-base lg:text-lg basis-1/6">Subtotal</div>
                    <div className="text-base lg:text-lg basis-1/6">Remove</div>
                </div>
                {productList?.map((item: Product, index: number) => (
                    <ProductInCart key={index} handleDelete={handleDelete} idProduct={item.id} titleProduct={item.nameProduct} priceProduct={item.priceProduct} amountProduct={item.amountProduct} imageProduct={item.image} />))}
                <div className="flex mt-20 justify-end gap-3">
                    <div className="py-4 px-10 bg-white hover:bg-black hover:text-white transition duration-300">Continue Shopping</div>
                    <div className="py-4 px-10 bg-black text-white hover:bg-gold-200 transition duration-300">Update Cart</div>
                </div>
            </div>
        </section>
    )
}

export default Cart