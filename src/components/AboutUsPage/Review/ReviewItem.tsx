import Image from "next/image"

interface ReviewItemProps{
    reviewContent: string
    linkAvatarReviewer: string
    nameViewer: string
    positionViewer: string
}

function ReviewItem(props: ReviewItemProps) {

    const {reviewContent, linkAvatarReviewer, nameViewer, positionViewer} = props

    return (
        <div className="basis-1/2 bg-white py-8 px-12">
            <div className="mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gold-200">
                    <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="font-sans text-lg mb-5">{reviewContent}</div>
            <div className="flex items-center">
                <div><Image loading="lazy" src={linkAvatarReviewer} width={100} height={100} alt="" className="w-16 h-16 rounded-full mr-5" /></div>
                <div>
                    <div className="text-lg">{nameViewer}</div>
                    <div className="font-sans text-slate-400">{positionViewer}</div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem