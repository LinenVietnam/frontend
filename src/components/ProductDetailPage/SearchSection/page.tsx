import Image from "next/image"

function SearchSection() {
    return (
        <section className="w-full h-[450px] bg-black fixed z-50 top-0 hidden" id="search-section">
            <div className="w-[90%] mx-auto">
                <div className="w-full flex justify-between items-center mt-10">
                    <Image width={100} height={100} src="/img/logoLinen.png" alt="" className="w-[220px]" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white" id="close-search-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="mt-16 flex items-center">
                    <input type="text" placeholder="Type words and hit enter" className="bg-transparent w-full py-5 px-10 text-white text-2xl focus:outline-none focus:border-b-white border-b" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
            </div></section>
    )
}

export default SearchSection