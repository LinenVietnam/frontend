'use client'
import { useEffect, useState, ChangeEvent } from "react";
import { API } from "@/helper/API";
import { useRouter } from "next/navigation";
import LeftSideAdmin from "@/components/LeftSideAdmin";
import InputProduct from "./InputProduct";

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
interface Props {
    params: {
        edit: string;
    };
}
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
    weightProduct: number
    widthProduct: number
}

const AddNewProduct: React.FC<Props> = ({ params }) => {
    const router = useRouter()

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
        formDataToSend.append('bid', params.edit)
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        fetch(`${API}/product/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            },
            body: formDataToSend
        }).then(res => res.json())
            .then(res => { 
                if(res.err === 0){
                    router.push(`/QuanLy/AllProduct/`)
             }});
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

    const [detailProduct, setDetailProduct] = useState<Product[]>([])
    useEffect(() => {
        fetch(`${API}/product/?id=${params.edit}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            },
        }).then(res => res.json())
            .then((res: { productData: { rows: Product[] } }) => { setDetailProduct(res.productData.rows) });
    }, [])

    useEffect(() => {
        setFormData({
            nameProduct: detailProduct[0]?.nameProduct,
            detailProduct: detailProduct[0]?.detailProduct,
            priceProduct: detailProduct[0]?.priceProduct,
            amountProduct: detailProduct[0]?.amountProduct,
            categoryProduct: detailProduct[0]?.categoryProduct,
            tagProduct: detailProduct[0]?.tagProduct,
            weightProduct: detailProduct[0]?.weightProduct,
            widthProduct: detailProduct[0]?.widthProduct,
            image: null
        });
    }, [detailProduct])

    return (
        <section>
            <div className="w-[200px] h-[100vh] bg-white px-5 fixed" id="left-side">
                <LeftSideAdmin />
            </div>
            <form className="ml-[200px] px-12 py-10">
                <div className="text-3xl border-b-2 border-slate-500">Add New Product</div>
                <div className="wrap-items mt-20">
                    <InputProduct titleInput="Tên sản phẩm" onChange={handleChange} value={formData.nameProduct} name="nameProduct" />
                    <InputProduct titleInput="Mô tả sản phẩm" onChange={handleChange} value={formData.detailProduct} name="detailProduct" />
                    <div className="flex justify-between max-w-[720px] gap-10">
                        <InputProduct titleInput="Giá" onChange={handleChange} value={formData.priceProduct} name="priceProduct" />
                        <InputProduct titleInput="Hàng trong kho" onChange={handleChange} value={formData.amountProduct} name="amountProduct" />
                    </div>
                    <InputProduct titleInput="Category" onChange={handleChange} value={formData.categoryProduct} name="categoryProduct" />
                    <InputProduct titleInput="Tags" onChange={handleChange} value={formData.tagProduct} name="tagProduct" />
                    <div className="flex justify-between max-w-[720px] gap-10">
                        <InputProduct titleInput="Cân nặng (g)" onChange={handleChange} value={formData.weightProduct} name="weightProduct" />
                        <InputProduct titleInput="Chiều dài (cm)" onChange={handleChange} value={formData.widthProduct} name="widthProduct" />
                    </div>
                    <div className="flex flex-col mb-10 basis-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Ảnh đại diện sản phẩm:</label>
                        <input className="block max-w-[250px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={handleImageChange} />
                    </div>
                    <button className="bg-white px-10 py-4 border border-slate-900 rounded-lg hover:bg-black hover:text-white transition duration-300" onClick={handleSubmit} >Sửa sản phẩm</button>
                </div>
            </form>
        </section>

    )
}

export default AddNewProduct