'use client'
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import DescriptionProduct from "@/components/ProductDetailPage/DescriptionProduct/page";
import ProductDetailBlock from "@/components/ProductDetailPage/ProductDetailBlock/page";
import Relatedproducts from "@/components/ProductDetailPage/RelatedProducts/page";
import SearchSection from "@/components/ProductDetailPage/SearchSection/page";
import TitleH2 from "@/components/TitleH2";
import { API } from "@/helper/API";
import { useEffect, useState } from "react";

interface Product {
    id: string;
    image: string;
    nameProduct: string;
    priceProduct: number;
    categoryProduct: string
    detailProduct: string
    reviewProduct: string
    tagProduct: string
    amountProduct: number
  }

function ProductDetail({params} : {params: {id: string}}) {

    const [detailProduct, setDetailProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`${API}/product/?id=${params.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => {setDetailProduct(res.productData.rows)});
    }, [])

    const fnameProduct=detailProduct[0]?.nameProduct
    const fcategoryProduct=detailProduct[0]?.categoryProduct
    const fdetailProduct=detailProduct[0]?.detailProduct
    const fimage=detailProduct[0]?.image
    const fpriceProduct=detailProduct[0]?.priceProduct
    const freviewProduct=detailProduct[0]?.reviewProduct
    const tagProduct=detailProduct[0]?.tagProduct
    const amountProduct=detailProduct[0]?.amountProduct

    return (
        <div>
            <Header />
            <SearchSection />
            <TitleH2 titlePage={fcategoryProduct} />
            <ProductDetailBlock nameProduct={fnameProduct} categoryProduct={fcategoryProduct} priceProduct={fpriceProduct} image={fimage} detailProduct={fdetailProduct} reviewProduct={freviewProduct} tagProduct={tagProduct} bid={detailProduct[0]?.id} amountProduct={amountProduct} />
            <DescriptionProduct />
            <Relatedproducts />
            <Footer />
        </div>

    )
}

export default ProductDetail