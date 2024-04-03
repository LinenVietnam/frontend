import Image from "next/image"

function WhatsNew() {
    return (
        <section id="whatsnews" className="mt-20 w-full mx-auto bg-white py-10">
            <div className="row max-w-[90%] mx-auto flex flex-col md:flex-row">
                <div className="basis-1/2 w-[95%] md:w-[80%] px-0 md:px-10 mt-auto mb-auto">
                    <div className="font-extralight tracking-widest text-sm mb-5">INDIVIDUAL APPROACH</div>
                    <div className="font-extralight text-4xl lg:text-5xl mb-5 lg:mb-10">We Believe that Every Client Is Unique
                    </div>
                    <div className="text-slate-600 text-base font-sans mb-10 lg:mb-10">Dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas vsit aspernatur aut odit aut fugit sed quia.</div>
                    <div><a href="" className="bg-gold-200 hover:bg-gold-400 transition-all duration-300 ease-in-out text-lg lg:text-xl text-white py-4 lg:py-5 px-12">More
                        Details</a></div>
                </div>
                <div className="basis-1/2 mb-5 md:mb-0 mt-10 md:mt-0">
                    <div className="max-w-full md:max-w-[95%] lg:max-w-[100%]">
                        <Image width={200} height={250} alt="" src="/img/whatsnews.jpg" className="block w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatsNew