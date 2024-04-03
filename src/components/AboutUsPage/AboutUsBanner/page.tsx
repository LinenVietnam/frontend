import Link from "next/link"
import DetailAboutUsBanner from "./DetailAboutUsBanner"

function AboutUsPage() {
    return (
        <section id="about-us-banner" className="w-[90%] mx-auto mt-20">
            <div className="row flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-14">
                <div className="wrap-image-about-us-banner flex basis-1/2 gap-7">
                    <div className="basis-1/2 h-[250px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/img/image-about-us-banner.jpg')`}}/>
                    <div className="basis-1/2 h-[250px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/img/image-about-us-banner-2.jpg')`}}/>
                </div>
                <div className="basis-1/2 w-[95%] md:w-[80%] px-0 md:px-7 my-auto">
                    <div className="font-extralight text-4xl lg:text-5xl mb-5 lg:mb-7">About Linen Vietnam</div>
                    <div className="text-slate-600 text-base font-sans mb-5 lg:mb-5 leading-8">Linen Vietnam CO.,LTD headquartered in Hanoi and representative office in Ho Chi Minh City.</div>
                    <DetailAboutUsBanner titleDetailAboutUsBanner="Chất lượng hàng đầu"></DetailAboutUsBanner>
                    <DetailAboutUsBanner titleDetailAboutUsBanner="Giao hàng nhanh gọn"></DetailAboutUsBanner>
                    <DetailAboutUsBanner titleDetailAboutUsBanner="Đúng mẫu khi nhận hàng"></DetailAboutUsBanner>
                    <div className="mt-10"><Link href={'/OurProduct'} className="bg-gold-200 hover:bg-gold-400 transition-all duration-300 ease-in-out text-lg md:text-base lg:text-xl text-white py-4 lg:py-5 px-12">Khám phá tất cả sản phẩm</Link></div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage