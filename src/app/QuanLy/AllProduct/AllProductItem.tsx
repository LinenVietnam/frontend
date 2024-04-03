'use client'
import { API } from "@/helper/API"
import { useRouter } from "next/navigation"
import { toast, Bounce } from "react-toastify"

interface AllProductItemProps{
    setCheckRes: any
    item: any
}

function AllProductItem(props: AllProductItemProps) {

    const router = useRouter()
    const notify = () => toast.success('Chúng tôi đã ghi nhận email của bạn', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });;

    const handleDelete = () => {
        fetch(`${API}/product/?bids[0]=${item.id}&filename[0]=${item.filenameProduct}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((res) => {
                if(res){
                    setCheckRes(true)
                    notify()
                }
            });
    }

    const handleRoute = () => {
        router.push(`/QuanLy/AllProduct/${item.id}`)
    }

    const {setCheckRes, item} = props

    return (
        <tr key={item.id} className="bg-white px-5 py-10 mb-10 align-middle">
            <td className="text-center font-sans w-14 h-14 bg-cover bg-center bg-no-repeat mb-10 block mt-10 mx-auto" style={{ backgroundImage: `url(${item.image})` }} />
            <td className="text-center font-sans text-lg">{item.nameProduct}</td>
            <td className="text-center font-sans ">{item.priceProduct}</td>
            <td className="text-center font-sans ">{item.categoryProduct}</td>
            <td className="text-center font-sans">{item.amountProduct}</td>
            <td className="flex justify-center align-middle items-center relative bottom-14 gap-3">
                <button className="bg-blue-600 text-white px-3 py-2 cursor-pointer" onClick={handleRoute}>Edit</button>
                <button className="bg-red-600 text-white px-3 py-2 cursor-pointer" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default AllProductItem