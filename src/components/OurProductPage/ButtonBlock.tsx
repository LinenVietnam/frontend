import Link from "next/link"

function ButtonBlock() {
    return (
        <div className="mt-10 flex gap-2">
            <Link href={'/ViewCart'} className="py-3 basis-1/2 text-center bg-gold-200 text-white">View cart</Link>
            <Link href={'/Checkout'} className="py-3 basis-1/2 text-center border-2 border-black">Checkout</Link>
        </div>
    )
}

export default ButtonBlock