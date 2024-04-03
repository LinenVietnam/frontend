interface TitleH2Props {
    titlePage: string
}
function TitleH2(props: TitleH2Props) {

    const { titlePage } = props

    return (
        <>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mt-20">{titlePage}</h2>
            <div className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </>
    )
}

export default TitleH2