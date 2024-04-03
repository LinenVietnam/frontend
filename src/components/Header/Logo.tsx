import Image from "next/image"
import Link from "next/link"

function Logo() {
    return (
        <div className="logo bg-transparent w-[200px]">
            <Link href={'/'}>
                <Image width={200} height={200} alt="logo LinenVietnam" src="/img/logoLinenblacktext.png" />
            </Link>
        </div>
    )
}

export default Logo