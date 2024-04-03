'use client'
import React, { useEffect, useState } from "react"
import ChoosePayment from "../PaymentForm.tsx/ChoosePayment"
import { API } from "@/helper/API"
import PaypalCheckoutButton from "./PaypalCheckoutButton";

interface Payment {
    formDataSend: any
}

function Payment(props: Payment) {

    const { formDataSend } = props

    const [fAddress, setFAddress] = useState('')
    useEffect(() => {
        setFAddress(formDataSend.addressOrder + " " + formDataSend.street + " " + formDataSend.ward + " " + formDataSend.district + " " + formDataSend.city)
    }, [formDataSend.addressOrder, formDataSend.street, formDataSend.ward, formDataSend.district + formDataSend.city])

    const [productInCart, setProductInCart] = useState<any | null>(null)
    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [])

    const productList = productInCart ? JSON.parse(productInCart) : [];

    const producNametList: string[] = [];
    const productAmountList: string[] = []

    productList?.forEach((item: any, index: number) => {
        producNametList.push(item.nameProduct);
        productAmountList.push(item.amountProduct);

    });

    let sumPrice = 0;
    productList.forEach(myFunction);

    function myFunction(item: any) {
        sumPrice += item.totalPrice;
    }

    let fSumPrice = sumPrice / 24500
    const product = {
        description: String(producNametList),
        // price: fSumPrice.toFixed(2)
        price: 1
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const DataSend = new FormData();

        // producNametList.forEach(product => {
        //     DataSend.append('nameProductOrder', product);
        // });
        // productAmountList.forEach(product => {
        //     DataSend.append('amountOrder', Number(product));
        // });

        // fetch(`${API}/order/`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         nameProductOrder: String(producNametList),
        //         nameUserOrder: formDataSend.nameUserOrder,
        //         addressOrder: fAddress,
        //         amountOrder: String(productAmountList),
        //         phoneNumberOrder: String(formDataSend.phoneNumberOrder),
        //         totalOrder: sumPrice,
        //         companyNameOrder: formDataSend.companyNameOrder,
        //         emailOrder: formDataSend.emailOrder,
        //         noteOrder: formDataSend.noteOrder,
        //         shippingMethodOrder: "Viettel Post"
        //     })
        // }).then(res => res.json())
        //     .then(res => { console.log(res) });
        // fetch(`https://api-merchant.payos.vn/`,{
        //     method: 'POST',
        //     headers:{

        //     }
        // })
    }

    return (
        <>
            <h2 className="text-3xl mb-5 mt-10">Payment</h2>
            {/* <div className="wrap-payment bg-white py-7 px-12">
                <ChoosePayment />
                <div className="w-full bg-gold-200 hover:bg-gold-400 transition duration-300 cursor-pointer text-white text-xl py-5 flex justify-center mt-5" onClick={handleSubmit}>Place order</div>
            </div> */}
            {fSumPrice ? <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div> : <p>Bạn chưa có sản phẩm trong giỏ hàng</p>}
        </>
    )
}

export default Payment