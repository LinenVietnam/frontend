'use client'
import Link from "next/link"

function WhatWeOffer() {
    return (
        <section id="what-we-offer" className="mt-20 w-[95%] mx-auto">
            <div className="row mx-auto">
                <div className="uppercase text-center mb-5">Giá trị chúng tôi mang lại</div>
                <div className=" text-3xl lg:text-4xl xl:text-5xl text-center w-[80%] lg:w-[70%] mx-auto leading-[3rem] xl:leading-[3.5rem] mb-7">
                    Không có sản phẩm nào là hoàn hảo nhất, chỉ có sản phẩm chất lượng nhất
                </div>
                <div className="text-center w-fit mx-auto text-lg relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark hover:after:w-0 transition ease-in-out after:duration-500 hover:after:duration-500">
                    <Link href={'/OurProduct'}>Xem tất cả sản phẩm</Link></div>
            </div>
        </section>
    )
}

export default WhatWeOffer