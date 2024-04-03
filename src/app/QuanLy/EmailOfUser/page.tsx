'use client'
import LeftSideAdmin from "@/components/LeftSideAdmin"
import { API } from "@/helper/API"
import { useEffect, useState } from "react"
import EmailBlock from "./EmailBlock"

interface EmailUser{
    id: number
    emailOfUser: string
}

function EmailOfUser() {

    const [listEmail, setListEmail] = useState<any|null>(null)
    const [totalProduct, setTotalProduct] = useState(0)
    const totalPage = ((totalProduct - (totalProduct % 20)) / 20) + 1

    useEffect(() => {
        fetch(`${API}/emailUser/?limit=20&order[]=createdAt&order[]=DESC&page=1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
        .then((res: { emailUsertData: { rows: EmailUser[], count: number } }) => {setListEmail(res.emailUsertData.rows), setTotalProduct(res.emailUsertData.count)})
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
        fetch(`${API}/emailUser/?order[]=createdAt&order[]=DESC&limit=20&page=${key}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            }
        }).then(res => res.json())
            .then((res: { emailUsertData: { rows: EmailUser[] } }) => { setListEmail(res.emailUsertData?.rows) });
    }

    const listEmailItem = listEmail?.map((item: any, index: number) => (
        <EmailBlock key={index} item={item} />
    ))

    return (
        <section>
            <div className="w-[200px] h-[100vh] bg-white px-5 fixed" id="left-side">
                <LeftSideAdmin />
            </div>
            <form className="ml-[200px] px-12 py-10">
                <div className="text-3xl border-b-2 border-slate-500">Emails Of Users</div>
                <div className="wrap-items mt-14">
                    <table className="w-full justify-between">
                        <tbody>
                            <tr>
                                <th className="text-left w-[15%]">Id</th>
                                <th className="text-left">Email</th>
                            </tr>
                            {listEmailItem}
                        </tbody>
                    </table>
                    <div className="flex justify-center gap-2">
                        {pageItem}
                    </div>
                </div>
            </form>
        </section>

    )
}

export default EmailOfUser