'use client'
import { useEffect, useState } from "react"
import ChooseShipping from "../PaymentForm.tsx/ChooseShipping"
import OrderItem from "../PaymentForm.tsx/OrderItem"
import ProductInCheckout from "../PaymentForm.tsx/ProductInCheckout"

function Order() {
    const [productInCart, setProductInCart] = useState<any | null>(null)

    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [])

    const productList = productInCart ? JSON.parse(productInCart) : [];

    const productListItem = productList?.map((item: any, index: number) => (
        <ProductInCheckout key={index} nameProduct={item.nameProduct} amountProduct={item.amountProduct} priceProduct={item.priceProduct} />
    ))

    let sumPrice = 0;
    productList.forEach(myFunction);

    function myFunction(item: any) {
        sumPrice += item.totalPrice;
    }

    return (
        <>
            <h2 className="text-3xl mb-5">Your order</h2>
            <div className="wrap-order bg-white py-7 px-12">
                {productListItem}
                <OrderItem titleOrder="Subtotal" priceOrder={sumPrice} />
                <div className="order-item mb-5">
                    <div className="flex justify-between mb-5">
                        <div className="text-lg md:text-base">Shipping</div>
                        <ChooseShipping/>
                    </div>
                    <hr className="w-full h-[1px] bg-slate-200" />
                </div>
                {/* <OrderItem titleOrder="Fee" priceOrder={13} />
                <OrderItem titleOrder="Total" priceOrder={80} /> */}
            </div>
        </>
    )
}

export default Order