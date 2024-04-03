import { useEffect, useState } from "react";
import RelatedProductItem from "./RelatedProductItem"
import { API } from "@/helper/API";

interface Product {
    id: string;
    image: string;
    nameProduct: string;
    priceProduct: number;
  }

function Relatedproducts() {

    const [listProduct, setListProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`${API}/product/?order[]=createdAt&order[]=DESC&limit=3`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            // .then((res => console.log(res)));
            .then((res: { productData: { rows: Product[] } }) => {setListProduct(res.productData.rows)});
    }, [])

    const listProductItem = listProduct?.map((item: any, index: any) => (<RelatedProductItem key={index} linkImage={item.image} nameProduct={item.nameProduct} realPrice={item.priceProduct} fid={item.id} />))

    return (
        <section id="related-products" className="mt-20 w-[90%] mx-auto mb-20">
            <div className="row">
                <div className="text-4xl mb-10">Các sản phẩm mới nhất</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {listProductItem}
                </div>
            </div>
        </section>
    )
}

export default Relatedproducts