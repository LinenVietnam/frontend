'use client'
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import TitleH2 from "@/components/TitleH2";
import { ChangeEvent, useEffect, useState } from "react";
import CategoryBlock from "@/components/OurProductPage/CatagoryBlock";
import ButtonBlock from "@/components/OurProductPage/ButtonBlock";
import FilterBlock from "@/components/OurProductPage/FilterBlock";
import SortBlock from "@/components/OurProductPage/SortBlock";
import ListProductBlock from "@/components/OurProductPage/ListProductBlock";
import ProductList from "@/components/OurProductPage/ProductListBlock";
import { API } from "@/helper/API";

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
        if (e.target.value === 'lastest') {
            fetch(`${API}/product/?order[]=createdAt&order[]=DESC&page=${getKey}&limit=6`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
        }
        if (e.target.value === 'oldest') {
            fetch(`${API}/product/?order[]=createdAt&order[]=ASC&page=${getKey}&limit=6`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
        }
        if (e.target.value === 'low-to-high') {
            fetch(`${API}/product/?order[]=priceProduct&order[]=ASC&page=${getKey}&limit=6`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
        }
        if (e.target.value === 'high-to-low') {
            fetch(`${API}/product/?order[]=priceProduct&order[]=DESC&page=${getKey}&limit=6`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
        }
    }

    useEffect(() => {
        fetch(`${API}/product/?page=1&limit=6&order[]=createdAt&order[]=DESC`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[], count: number } }) => { setListProduct(res.productData.rows), setTotalProduct(res.productData.count) });
    }, [])
    
    useEffect(() => {
        const pageItems = []
        for (let i = 1; i <= totalPage; i++) {
            pageItems.push(<p key={i} onClick={handlePage} className="bg-white rounded-full py-1 px-3 text-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer relative hover:bottom-1">{i}</p>)
        }
        setPageItem(pageItems)
    }, [totalPage])

    const handlePage = (e: any) => {
        const key = e.target.textContent;
        setGetKey(e.target.textContent)
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&limit=6&page=${key}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
    }

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