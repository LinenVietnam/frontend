'use client'
import LeftSideAdmin from "@/components/LeftSideAdmin"
import { API } from "@/helper/API"
import { useEffect, useState } from "react"
import OrderList from "./OrderList"

interface OrderProps {
    nameProductOrder: string
    nameUserOrder: string
    addressOrder: string
    phoneNumberOrder: number
    amountOrder: string
    totalOrder: number
    companyNameOrder: string
    emailOrder: string
    noteOrder: string
    shippingMethodOrder: string
}

function Order() {

    const [orderList, setOrderList] = useState<any | null>(null)
    const [totalProduct, setTotalProduct] = useState(0)
    const totalPage = ((totalProduct - (totalProduct % 20)) / 20) + 1

    useEffect(() => {
        fetch(`${API}/order/?limit=20&order[]=createdAt&order[]=DESC&page=1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
            .then((res: { orderData: { rows: OrderProps[], count: number } }) => { setOrderList(res.orderData.rows), setTotalProduct(res.orderData.count) });
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
        fetch(`${API}/order/?order[]=createdAt&order[]=DESC&limit=20&page=${key}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
            .then((res: { orderData: { rows: OrderProps[] } }) => { setOrderList(res.orderData?.rows) });
    }

    return (
        <section>
            <div className="w-[200px] h-[100vh] bg-white px-5 fixed" id="left-side">
                <LeftSideAdmin />
            </div>
            <div className="ml-[200px] px-12 py-10">
                <div className="text-3xl border-b-2 border-slate-500">All Order</div>
                <div className="wrap-items mt-20">
                    <table className="w-full justify-between">
                        <tbody>
                            <tr>
                                <th className="text-left">Sản phẩm</th>
                                <th className="text-left">Người đặt</th>
                                <th className="text-left">Địa chỉ</th>
                                <th className="text-left">Số điện thoại</th>
                                <th className="text-left">Số lượng</th>
                                <th className="text-left">Tên công ty</th>
                                <th className="text-left">Giá trị</th>
                                <th className="text-left">Ghi chú</th>
                            </tr>
                            {orderList ? orderList.map((item: any, index: number) => (<OrderList key={index} item={item}></OrderList>)) : []}
                        </tbody>
                    </table>
                    <div className="flex justify-center gap-2 mt-10">
                        {pageItem}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order