import Image from "next/image"
import Link from "next/link"

interface BlogItemProps{
    linkBlog: string
    imageBlog: string
    titleBlog: string
    dateBlog: string
    commentBlog: string
}

function BlogItem(props: BlogItemProps) {

    const {linkBlog, imageBlog, titleBlog, dateBlog, commentBlog} = props

    return (
        <Link href={linkBlog} className="blog-item">
            <div className=" w-full overflow-hidden mb-5">
                <Image loading="lazy" width={600} height={480} alt="" src={imageBlog} className="hover:scale-105 transition duration-300" />
            </div>
            <div className="uppercase text-slate-600 text-sm mb-3">TRENDs</div>
            <div className="text-3xl font-light mb-3">{titleBlog}</div>
            <div>
                <span className="text-sm text-slate-400">{dateBlog}</span>
                <span className="text-xl text-slate-400">.</span>
                <span className="text-sm text-slate-400">{commentBlog}</span>
            </div>
        </Link>
    )
}

export default BlogItem