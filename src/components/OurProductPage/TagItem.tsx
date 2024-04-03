import Link from "next/link"

interface TagItemProps{
    linkTag: string
    titleTag: string
}

function TagItem(props: TagItemProps){

    const {linkTag, titleTag} = props

    return(
        <Link href={linkTag} className="text-sm font-sans text-slate-500 border px-4 py-2 mb-3 inline-block mr-3">{titleTag}</Link>
    )
}

export default TagItem