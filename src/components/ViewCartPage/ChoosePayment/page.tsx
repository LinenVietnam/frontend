'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

function ChoosePayment() {

    const [productInCart, setProductInCart] = useState<any | null>(null)

    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [])

    const productList = productInCart ? JSON.parse(productInCart) : [];

    let sumPrice = 0;
    productList.forEach(myFunction);

    function myFunction(item: any) {
        sumPrice += item.totalPrice;
    }

    return (
        <section id="choose-payment" className="w-[90%] mx-auto mt-20 mb-20">
            <div className="row flex justify-end">
                <div className="w-full md:basis-1/2">
                    <div className="text-2xl mb-5">Cart totals</div>
                    <div className="w-full border">
                        <div className="flex">
                            <div className="bg-white basis-1/3 py-5 px-7 text-lg border border-slate-400 border-opacity-40">Subtotal</div>
                            <div className="basis-2/3 py-5 px-7 text-lg font-sans border border-slate-400 border-opacity-40">$ {sumPrice}</div>
                        </div>
                        <Link href={'/Checkout'} className="w-full bg-gold-200 hover:bg-gold-400 transition duration-300 cursor-pointer text-white text-xl py-5 flex justify-center mt-5">
                            Proceed to checkout
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChoosePayment