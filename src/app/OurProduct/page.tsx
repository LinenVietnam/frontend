'use client'
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import TitleH2 from "@/components/TitleH2";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetProduct, useGetProductSort } from "@/helper/getData";
import CategoryBlock from "@/components/OurProductPage/CatagoryBlock";
import ButtonBlock from "@/components/OurProductPage/ButtonBlock";
import FilterBlock from "@/components/OurProductPage/FilterBlock";
import SortBlock from "@/components/OurProductPage/SortBlock";
import ListProductBlock from "@/components/OurProductPage/ListProductBlock";
import ProductList from "@/components/OurProductPage/ProductListBlock";
import { useHandlePage } from "@/helper/handleEvent";

interface Product {
    id: number;
    image: string;
    nameProduct: string;
    priceProduct: number;
}

function OurProduct() {

    const [listProduct, setListProduct] = useState<Product[]>([]);
    const [totalProduct, setTotalProduct] = useState(0)
    const totalPage = ((totalProduct - (totalProduct % 6)) / 6) + 1
    const [getKey, setGetKey] = useState(0)
    const [pageItem, setPageItem] = useState<any | null>(null)
    const [productInCart, setProductInCart] = useState<any | null>(null)

    useEffect(() => {
        setProductInCart(localStorage.getItem("PRODUCT_LIST"))
    }, [])
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

    let sumPrice = 0;
    productList.forEach(myFunction);

    function myFunction(item: any) {
        sumPrice += item.totalPrice;
    }

    const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => { 
        useGetProductSort(getKey, setListProduct, e.target.value)
    }

    useGetProduct(setListProduct, setTotalProduct)
    useHandlePage(totalPage, setPageItem, setGetKey, setListProduct)

    return (
        <div className="bg-background-200">
            <Header />
            <TitleH2 titlePage="Shop"></TitleH2>
            <section className="w-[90%] mx-auto mt-20 mb-20">
                <div className="row flex flex-col lg:flex-row gap-10">
                    <div className="left-block-products basis-2/3">
                        <div className="flex justify-between">
                            <div className="font-sans text-slate-600">Showing {listProduct.length} of {totalProduct} results</div>
                            <SortBlock handleChangeSort={handleChangeSort} />
                        </div>
                        <ListProductBlock listProduct={listProduct} />
                        <div className="flex justify-center gap-2">
                            {pageItem}
                        </div>
                    </div>
                    <div className="right-block-products basis-1/3 py-14 px-10 bg-white h-fit">
                        <ProductList productList={productList} handleDelete={handleDelete} />
                        <div className="text-xl mt-10">Subtotal: <span className="text-gold-200">$ {sumPrice}</span></div>
                        <ButtonBlock />
                        <CategoryBlock />
                        {/* <FilterBlock /> */}
                        {/* <TagBlock /> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default OurProduct