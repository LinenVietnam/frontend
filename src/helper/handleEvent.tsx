import { useEffect, useState } from "react"
import { API } from "./API"

interface Product {
    id: number;
    image: string;
    nameProduct: string;
    priceProduct: number;
}

export const useHandlePage = (totalPage: number, setPageItem: any, setGetKey: any, setListProduct: any) => {
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
}