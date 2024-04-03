'use client'
import { useEffect, useState, ChangeEvent } from "react";
import InputProduct from "./InputProduct"
import LeftSideAdmin from "../../../components/LeftSideAdmin"
import { API } from "@/helper/API";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";

interface FormData {
    nameProduct: string;
    detailProduct: string;
    priceProduct: number;
    amountProduct: number;
    categoryProduct: string;
    tagProduct: string;
    weightProduct: number;
    widthProduct: number;
    image: File | null;
}

const AddNewProduct: React.FC = () => {
    const router = useRouter()

    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    const [formData, setFormData] = useState<FormData>({
        nameProduct: '',
        detailProduct: '',
        priceProduct: 0,
        amountProduct: 0,
        categoryProduct: '',
        tagProduct: '',
        weightProduct: 0,
        widthProduct: 0,
        image: null
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files ? e.target.files[0] : null;
        setFormData(prevState => ({
            ...prevState,
            image: imageFile
        }));
    };

    const handleSubmit = (e: any) => {

        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('nameProduct', formData.nameProduct);
        formDataToSend.append('detailProduct', formData.detailProduct);
        formDataToSend.append('priceProduct', String(formData.priceProduct));
        formDataToSend.append('amountProduct', String(formData.amountProduct));
        formDataToSend.append('categoryProduct', formData.categoryProduct);
        formDataToSend.append('tagProduct', formData.tagProduct);
        formDataToSend.append('weightProduct', String(formData.weightProduct));
        formDataToSend.append('widthProduct', String(formData.widthProduct));
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        fetch(`${API}/product/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            },
            body: formDataToSend
        }).then(res => res.json())
            .then(res => {
                if (res.err === 0) {
                    router.push('/QuanLy/AllProduct')
                }
            });
    }

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
                        console.log(321)
                        router.push('/')
                    }
                });
        } else {
            router.push('/')
        }
    }, [])

    return (
        <section>
            <div className="w-[200px] h-[100vh] bg-white px-5 fixed" id="left-side">
                <LeftSideAdmin />
            </div>
            <form className="ml-[200px] px-12 py-10">
                <div className="text-3xl border-b-2 border-slate-500">Add New Product</div>
                <div className="wrap-items mt-20">
                    <InputProduct titleInput="Tên sản phẩm" onChange={handleChange} name="nameProduct" />
                    <InputProduct titleInput="Mô tả sản phẩm" onChange={handleChange} name="detailProduct" />
                    <div className="flex justify-between max-w-[720px] gap-10">
                        <InputProduct titleInput="Giá" onChange={handleChange} name="priceProduct" />
                        <InputProduct titleInput="Hàng trong kho" onChange={handleChange} name="amountProduct" />
                    </div>
                    <InputProduct titleInput="Category" onChange={handleChange} name="categoryProduct" />
                    <InputProduct titleInput="Tags" onChange={handleChange} name="tagProduct" />
                    <div className="flex justify-between max-w-[720px] gap-10">
                        <InputProduct titleInput="Cân nặng (g)" onChange={handleChange} name="weightProduct" />
                        <InputProduct titleInput="Chiều dài (cm)" onChange={handleChange} name="widthProduct" />
                    </div>
                    <div className="flex flex-col mb-10 basis-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Ảnh đại diện sản phẩm:</label>
                        <input className="block max-w-[250px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={handleImageChange} />
                    </div>
                    <button className="bg-white px-10 py-4 border border-slate-900 rounded-lg hover:bg-black hover:text-white transition duration-300" onClick={handleSubmit} >Thêm sản phẩm</button>
                </div>
            </form>
        </section>

    )
}

export default AddNewProduct