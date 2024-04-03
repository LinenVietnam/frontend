import Link from "next/link"

function Footer() {
    return (
        <footer className="mt-40 w-full text-white bg-dark py-16">
            <div className="w-[90%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mx-auto gap-10">
                <div className="about-us-block">
                    <div className="text-3xl mb-5">About Us</div>
                    <hr className="w-full h-0.5 mb-5" />
                    <div className="leading-8">Linen Vietnam CO.,LTD headquartered in Hanoi and representative office in Ho Chi
                        Minh City. We operate professionally in the field of trading and developing fabrics with natural
                        materials. Especially, the fabrics are woven from linen yarns imported from France and Belgium. In
                        addition, we also trade in fabric products from cotton yarns, silk yarns, visco yarns, tencel yarns,
                        bamboo yarns,...</div>
                </div>
                <div className="contact-block">
                    <div className="text-3xl mb-5">Contact Us</div>
                    <hr className="w-full h-0.5 mb-5" />
                    <div className="font-sans mb-3"><strong>Email:</strong> Leehuyen.linen@gmail.com</div>
                    <div className="font-sans mb-3"><strong>Phone number:</strong> +84365157997</div>
                    <div className="font-sans mb-3"><strong>Address:</strong> C01-11 Chung cư Safira Khang Điền, số 454 Võ Chí
                        Công, phường Phú Hữu, Thành phố Thủ Đức </div>
                </div>
                <div className="social link block">
                    <div className="text-3xl mb-5">Social Media</div>
                    <hr className="w-full h-0.5 mb-5" />
                    <Link href='https://www.facebook.com/profile.php?id=100090163699801' className="flex items-center gap-5 mb-6">
                        <div style={{
                            backgroundImage: `url('/img/icon/fb-icon.png')`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} className="w-[30px] h-[30px]"></div>
                        <div className="text-lg">Facebook</div>
                    </Link>
                    <Link href='https://www.instagram.com/huyenlinen/' className="flex items-center gap-5 mb-6">
                        <div style={{
                            backgroundImage: `url('/img/icon/ins-icon.png')`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} className="w-[30px] h-[30px]"></div>
                        <div className="text-lg">Instagram</div>
                    </Link>
                    <Link href='https://www.tiktok.com/@linenvietnam?_t=8l3266HVyc6&_r=1' className="flex items-center gap-5 mb-6">
                        <div style={{
                            backgroundImage: `url('/img/icon/tt-icon.png')`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} className="w-[30px] h-[30px]"></div>
                        <div className="text-lg">Tiktok</div>
                    </Link> 
                </div>
            </div>
        </footer>
    )
}

export default Footer