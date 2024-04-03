// 'use client'
// import { useEffect, useState } from "react";

// export const useDeleteFunction = (setProductInCart: any, productInCart: any, setHandelDelete: any) => {
//     useEffect(() => {
//         setProductInCart(localStorage.getItem("PRODUCT_LIST"))
//     }, [])
//     let productList = productInCart ? JSON.parse(productInCart) : [];
//     const [productChange, setproductChange] = useState(productList)

//     useEffect(() => {
//         setProductInCart(localStorage.getItem("PRODUCT_LIST"))
//     }, [productChange])

//     setHandelDelete((id: string) => {
//         const productDelete = productList.filter((item: any) => item.id !== id)
//         setproductChange(productDelete)
//         localStorage.setItem("PRODUCT_LIST", JSON.stringify(productDelete))
//     })

//     productList.forEach(myFunction);

//     function myFunction(item: any) {
//         sumPrice += item.totalPrice;
//     }

// }