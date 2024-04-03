import Link from "next/link"

function WorldClass() {
    return (
        <section id="world-class" className="w-[95%]">
            <div className="row mx-auto px-2 sm:px-4 md:px-8 lg:px-14 pt-20">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="lg:basis-1/2 transition-all duration-500 text-[35px] md:text-[50px] lg:text-[90px] mt-auto text-center lg:text-left mb-5 lg:mb-0">
                        The Best Linen in Vietnam</div>
                    <div className="lg:basis-1/2 flex mt-auto justify-center gap-3 lg:-translate-y-40%">
                        <Link href={'/AboutUs'} className="border-2 text-base xs:text-xl py-4 px-10 hover:bg-dark hover:text-white transition-all duration-500 text-center cursor-pointer">About Us</Link>
                        <Link href={'/OurProduct'} className="bg-dark text-white text-base xs:text-xl py-4 px-8 text-center cursor-pointer hover:py-4 hover:px-8">Sản phẩm của chúng tôi</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorldClass