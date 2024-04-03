interface detailAboutUsBannerProps{
    titleDetailAboutUsBanner: string
}

function DetailAboutUsBanner(props: detailAboutUsBannerProps) {

    const {titleDetailAboutUsBanner} = props

    return (
        <div className="mb-2 flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gold-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="font-sans tracking-wider">{titleDetailAboutUsBanner}</span>
        </div>
    )
}

export default DetailAboutUsBanner