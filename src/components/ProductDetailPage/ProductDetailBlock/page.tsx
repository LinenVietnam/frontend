import Image from "next/image"
import PDBItemLink from "./PDBItemLink"
import PDBItemNoLink from "./PDBItemNoLink"
import ProductPrice from "./ProductPrice"
import ProductOrder from "./ProductOrder"
import ProductContent from "./ProductContent"

interface Product {
    bid: string
    image: string;
    nameProduct: string;
    priceProduct: number;
    categoryProduct: string
    detailProduct: string
    reviewProduct: string
    tagProduct: string
    amountProduct: number
  }

function ProductDetailBlock(props: Product) {

    const{image, nameProduct, priceProduct, categoryProduct, detailProduct, reviewProduct, tagProduct, bid, amountProduct} = props
    
    return (
        <section id="product-detail-item" className="mt-20 w-[90%] mx-auto">
            <div className="row flex gap-10 flex-col lg:flex-row mx-auto">
                <div className="wrap-img-product-detail flex flex-col-reverse sm:flex-row basis-[38%] gap-10">
                    {/* <div className="all-img-product-detail flex flex-row sm:flex-col gap-5" id="img-product-detail-parent">
                        <div className="h-[100px] w-[120px] md:h-[120px] md:w-[140px] bg-slate-50 bg-cover bg-center bg-no-repeat img-product-detail-child" style={{
                            backgroundImage: "url('/img/CEO-img.jpg')"
                        }}>
                        </div>
                        <div className="h-[100px] w-[120px] md:h-[120px] md:w-[140px] bg-slate-50 bg-cover bg-center bg-no-repeat img-product-detail-child" style={{
                            backgroundImage: "url('/img/CEO-img.jpg')"
                        }}>
                        </div>
                        <div className="h-[100px] w-[120px] md:h-[120px] md:w-[140px] bg-slate-50 bg-cover bg-center bg-no-repeat img-product-detail-child" style={{
                            backgroundImage: "url('/img/CEO-img.jpg')"
                        }}>
                        </div>
                    </div> */}
                    <div className="w-full overflow-hidden">
                        <div className="img-product-detail w-[100%] flex transition duration-500" id="list-image">
                            <Image loading="lazy" width={800} height={800} src={image} alt="" className="object-cover block max-w-full big-image-product" />
                        </div>
                    </div>
                </div>
                <div className="content-product-detail basis-[49%]">
                    <ProductPrice  priceProduct={priceProduct} nameProduct={nameProduct} />
                    <ProductContent detailProduct={detailProduct} />
                    <ProductOrder id={bid} image={image} nameProduct={nameProduct} priceProduct={priceProduct} />
                    <div className="product-detail mt-5">
                        <PDBItemLink labelItem="Category" categoryProduct={categoryProduct} />
                        <PDBItemNoLink labelItem="Số lượng sản phẩm còn lại: " amountProduct={amountProduct} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailBlock