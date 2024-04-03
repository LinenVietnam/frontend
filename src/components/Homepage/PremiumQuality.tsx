import Image from "next/image"

function PremiumQuality() {
    return (
        <section id="premium-quality" className="w-[90%] mx-auto">
            <div className="row mx-auto px-2 sm:px-4 md:px-8 lg:px-14 pt-20">
                <div className="flex flex-col md:flex-row">
                    <div className="basis-1/2 mb-5 md:mb-0">
                        <div className="max-w-[520px] md:max-w-[95%] lg:max-w-[85%]">
                            <Image loading="lazy" alt="" width={200} height={200} src="/img/CEO-img.jpg" className="block w-full" />
                        </div>
                    </div>
                    <div className="basis-1/2 w-[95%] md:w-[80%] px-0 md:px-7 my-auto">
                        <div className="font-extralight tracking-widest text-sm mb-5">PREMIUM QUALITY</div>
                        <div className="font-extralight text-4xl lg:text-5xl mb-5 lg:mb-10">Find Perfect Materials with Our
                            Services</div>
                        <div className="text-slate-600 text-base font-sans mb-5 lg:mb-10">không có sản phẩm hoàn hảo nhất, chỉ có sản phẩm chất lượng nhất.</div>
                        <div className="mb-5 lg:mb-10 text-xl lg:text-2xl"><span className="text-slate-400">01. </span>Top Quality
                            Fabric</div>
                        <div className="mb-10 text-xl lg:text-2xl"><span className="text-slate-400">02. </span>Modern Collection
                        </div>
                        <div><a href="" className="bg-gold-200 hover:bg-gold-400 transition-all duration-300 ease-in-out text-lg lg:text-xl text-white py-4 lg:py-5 px-12">Read More</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PremiumQuality