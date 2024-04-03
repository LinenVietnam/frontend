'use client'
import Image from "next/image"
import ProductInCartResponsive from "./ProductInCartResponsive"
import { useEffect, useState } from "react";

interface Product {
    nameProduct: string;
    priceProduct: number;
    amountProduct: number;
    image: string;
}

function CartResponsive() {

    const [productInCart, setProductInCart] = useState<any | null>(null)

    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [])

    const productList = productInCart ? JSON.parse(productInCart) : [];

    const ProductInCartItem = productList?.map((item: Product, index: number) => (
        <ProductInCartResponsive key={index} titleProduct={item.nameProduct} priceProduct={item.priceProduct} amountProduct={item.amountProduct} imageProduct={item.image} />
    ))

    return (
        <section id="cart-responsive" className="w-[90%] mx-auto mt-20 block md:hidden">
            <div className="row">
                {ProductInCartItem}
            </div>
        </section>
    )
}

export default CartResponsive