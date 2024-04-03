'use client'
import LeftSideAdmin from "@/components/LeftSideAdmin";
import AllProductItem from "./AllProductItem";
import { useEffect, useState } from "react";
import { API } from "@/helper/API";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

interface Product {
    id: number;
    linkImage: string;
    nameProduct: string;
    priceProduct: number;
    categoryProduct: string;
    amountProduct: number;
    filename: string
}

function AllProduct() {
    const router = useRouter()
    const [totalProduct, setTotalProduct] = useState(0)
    const totalPage = ((totalProduct - (totalProduct % 10)) / 10) + 1

    const [listProduct, setListProduct] = useState<Product[]>([]);
    const [checkRes, setCheckRes] = useState(false)

    useEffect(() => {
        const access_token = localStorage.getItem("token");
        if (access_token) {
            fetch(`${API}/checkRole/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': `${access_token}`,
                },
                body: JSON.stringify({})
            }).then(res => res.json())
                .then(res => {
                    if (res.message === 'success') {
                        console.log(123)
                    } else {
                        router.push('/')
                    }
                });
        }
    }, [])

    useEffect(() => {
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&limit=10&page=1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[], count: number } }) => { setListProduct(res.productData.rows), setTotalProduct(res.productData.count) });
    }, [])

    const [pageItem, setPageItem] = useState<any | null>(null)
    useEffect(() => {
        const pageItems = []
        for (let i = 1; i <= totalPage; i++) {
            pageItems.push(<p key={i} onClick={handlePage} className="bg-slate-300 rounded-full py-1 px-3 text-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer relative hover:bottom-1">{i}</p>)
        }
        setPageItem(pageItems)
    }, [totalPage])

    const [getKey, setGetKey] = useState(0)
    const handlePage = (e: any) => {
        const key = e.target.textContent;
        setGetKey(e.target.textContent)
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&limit=10&page=${key}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) });
    }

    const listProductItem = listProduct?.map((item: any, index: number) => (
        <AllProductItem
            key={index}
            setCheckRes={setCheckRes}
            item={item}
        />
    ));

    useEffect(() => {
        mutate(`${API}/product/`)
    }, [checkRes])

    return (
        <section>
            <div className="w-[200px] h-[100vh] bg-white px-5 fixed" id="left-side">
                <LeftSideAdmin />
            </div>
            <div className="ml-[200px] px-12 py-10">
                <div className="text-3xl border-b-2 border-slate-500">All Products</div>
                <div className="wrap-items mt-20">
                    <table className="w-full justify-between">
                        <tbody><tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                            {listProductItem}
                        </tbody>
                    </table>
                    <div className="flex justify-center gap-2">
                        {pageItem}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllProduct