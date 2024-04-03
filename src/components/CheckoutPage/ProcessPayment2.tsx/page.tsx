import BiggerIcon from "@/components/BiggerIcon/page"

function ProcessPayment2() {
    return (
        <section id="process-payment" className="w-[90%] mx-auto mt-20">
            <div className="row">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div className="text-lg lg:text-xl"><span className="inline-block py-2 px-4 bg-gold-200 rounded-full text-white font-mono text-base mr-3">1</span>
                        Shopping
                        Cart</div>
                    <BiggerIcon />
                    <div className="text-lg lg:text-xl"><span className="inline-block py-2 px-4 bg-gold-200 rounded-full text-white font-mono text-base mr-3">2</span>
                        Payment &amp;
                        Delivery Options</div>
                    <BiggerIcon />
                    <div className="text-lg lg:text-xl"><span className="inline-block py-2 px-4 bg-black rounded-full text-white font-mono text-base mr-3">3</span>
                        Order
                        Received</div>
                </div>
            </div>
        </section>
    )
}

export default ProcessPayment2