'use client'
import { useEffect, useState } from "react";
import { API } from "./API";

interface Product {
    id: number;
    image: string;
    nameProduct: string;
    priceProduct: number;
}

export const useGetProduct = (setListProduct: any, setTotalProduct: any, category?: any) => {

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
}

export const useGetProductSort = (getKey: any, setListProduct: any, getSort: any) => {
    if (getSort === 'lastest') {
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&page=${getKey}&limit=6`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
    }
    if (getSort === 'oldest') {
        fetch(`${API}/product/?order[]=createdAt&order[]=ASC&page=${getKey}&limit=6`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
    }
    if (getSort === 'low-to-high') {
        fetch(`${API}/product/?order[]=priceProduct&order[]=ASC&page=${getKey}&limit=6`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
    }
    if (getSort === 'high-to-low') {
        fetch(`${API}/product/?order[]=priceProduct&order[]=DESC&page=${getKey}&limit=6`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setListProduct(res.productData?.rows) })
    }
}