'use client'
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import TitleH2 from "@/components/TitleH2";
import CategoryItem from "@/components/OurProductPage/CategoryItem";
import TagItem from "@/components/OurProductPage/TagItem";
import { API } from "@/helper/API";
import { useEffect, useState } from "react";
import ProductSelected from "@/components/OurProductPage/ProductSelected";
import ProductItem from "@/components/OurProductPage/ProductItem";

interface Product {
    id: number;
    image: string;
    nameProduct: string;
    priceProduct: number;
}

function ProductCategoryt({ params }: { params: { category: string } }) {

    const [listProduct, setListProduct] = useState<Product[]>([]);
    const [totalProduct, setTotalProduct] = useState(0)
    const totalPage = ((totalProduct - (totalProduct % 6)) / 6) + 1

    useEffect(() => {
        fetch(`${API}/product/?category=${params.category}&order[]=createdAt&order[]=DESC`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[], count: number } }) => { setListProduct(res.productData.rows), setTotalProduct(res.productData.count)});
    }, [])

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

    const productListItem = productList?.map((item: any, index: number) => (
        <ProductSelected key={index} idProduct={item.id} handleDelete={handleDelete} imageProduct={item.image} nameProduct={item.nameProduct} priceProduct={item.priceProduct} amountProduct={item.amountProduct}></ProductSelected>
    ))

    const listProductItem = listProduct?.map((item: any, index: number) => (
        <ProductItem key={index} idProduct={item.id} imageProduct={item.image} nameProduct={item.nameProduct} priceProduct={item.priceProduct}></ProductItem>
    ));

    const handleChangeSort = (e: any) => {
        if(e.target.value === 'lastest'){
            fetch(`${API}/product/?category=${params.category}&order[]=createdAt&order[]=DESC`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
        }
        if(e.target.value === 'oddest'){
            fetch(`${API}/product/?category=${params.category}&order[]=createdAt&order[]=ASC`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
        }
        if(e.target.value === 'low-to-high'){
            fetch(`${API}/product/?category=${params.category}&order[]=priceProduct&order[]=ASC`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
        }
        if(e.target.value === 'high-to-low'){
            fetch(`${API}/product/?category=${params.category}&order[]=priceProduct&order[]=DESC`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            }).then(res => res.json())
                .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
        }
    }

    const [pageItem, setPageItem] = useState<any|null>(null)
    useEffect(() => {
        const pageItems = []
        for (let i = 1; i <= totalPage; i++) {
            pageItems.push(<p key={i} onClick={handlePage} className="bg-white rounded-full py-1 px-3 text-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer relative hover:bottom-1">{i}</p>)
        }
        setPageItem(pageItems)
    }, [totalPage])

    const handlePage = (e: any) => {
        const key = e.target.textContent;
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&limit=6&page=${key}&categoryProduct=${params.category}`, {
            method: 'GET',
            headers:{
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
        .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows), console.log(res) });
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
                            <div className="font-sans">
                                <select onChange={handleChangeSort} className="bg-transparent">
                                    <option value="lastest">Sort by lastest</option>
                                    <option value="oddest">Sort by oddest</option>
                                    <option value="low-to-high">Sort by price: low to hight</option>
                                    <option value="high-to-low">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 mt-10 gap-5">
                            {listProductItem}
                        </div>
                        <div className="flex justify-center gap-2">
                            {pageItem}
                        </div>
                    </div>
                    <div className="right-block-products basis-1/3 py-14 px-10 bg-white h-fit">
                        <div className="text-xl font-light">Cart</div>
                        {productListItem}
                        <div className="text-xl mt-10">Subtotal: <span className="text-gold-200">$ {sumPrice}</span></div>
                        <div className="mt-10 flex gap-2">
                            <Link href={'/ViewCart'} className="py-3 basis-1/2 text-center bg-gold-200 text-white">View cart</Link>
                            <Link href={'/Checkout'} className="py-3 basis-1/2 text-center border-2 border-black">Checkout</Link>
                        </div>
                        <div className="mt-5 mb-10 ml-5">
                            <ul>
                                <CategoryItem linkCategory="Linen Fabric" titleCategory="Linen Fabric"></CategoryItem>
                                <CategoryItem linkCategory="Linen Yard" titleCategory="Linen Yard"></CategoryItem>
                                <CategoryItem linkCategory="Linen Handmade" titleCategory="Linen Handmade"></CategoryItem>
                                <CategoryItem linkCategory="Linen Scarf" titleCategory="Linen Scarf"></CategoryItem>
                                <CategoryItem linkCategory="Eco Wash" titleCategory="Eco Wash"></CategoryItem>
                                <CategoryItem linkCategory="Linen Fashion" titleCategory="Linen Fashion"></CategoryItem>
                                <CategoryItem linkCategory="Linen Bedding" titleCategory="Linen Bedding"></CategoryItem>
                                <CategoryItem linkCategory="Linen Curtain" titleCategory="Linen Curtain"></CategoryItem>
                            </ul>
                        </div>
                        {/* <div className="text-xl font-light mt-10">Filter</div>
                        <div className="slidecontainer mt-5 mb-10">
                            <input type="range" min={1} max={100} defaultValue={50} className="slider w-full" id="myRange" />
                            <p>Value: 0 - <span id="demo" /></p>
                        </div> */}
                        {/* <Link href="" className="py-3 px-12 w-[100px] text-center bg-gold-200 hover:bg-gold-400 duration-300 transition text-white">View cart</Link> */}
                        {/* <div className="text-xl font-light mt-10">Tags</div>
                        <div className="mt-5 gap-3">
                            <TagItem linkTag="" titleTag="Collection"></TagItem>
                            <TagItem linkTag="" titleTag="Fabric"></TagItem>
                            <TagItem linkTag="" titleTag="Fashion"></TagItem>
                            <TagItem linkTag="" titleTag="Home"></TagItem>
                            <TagItem linkTag="" titleTag="Modern"></TagItem>
                            <TagItem linkTag="" titleTag="Sale"></TagItem>
                            <TagItem linkTag="" titleTag="Style"></TagItem>
                            <TagItem linkTag="" titleTag="Textile"></TagItem>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default ProductCategoryt