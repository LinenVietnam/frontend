interface BannerProps {
    linkBanner: string;
}

function Banner(props: BannerProps) {
    const { linkBanner } = props
    return (
        <section style={{
            backgroundImage: `${linkBanner}`, // Đường dẫn phải bắt đầu từ thư mục 'public'
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className=" h-[216px] xs:h-[240px] md:h-[320px] lg:h-[360px] xl:h-[530px] w-full mt-20 bg-no-repeat">
        </section>
    )
}

export default Banner