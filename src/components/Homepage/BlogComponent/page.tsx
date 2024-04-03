import Image from "next/image"
import BlogItem from "./BlogItem"
import Link from "next/link"

function BlogComponent() {
    return (
        <section id="blog" className="mt-40 w-full h-fit py-20 mx-auto bg-background-200">
            <div className="row w-[90%] mx-auto">
                <div className="text-sm text-center tracking-widest">FROM THE BLOG</div>
                <div className="text-5xl tracking-wide text-center mt-5">Our Articles</div>
                <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
                    <BlogItem linkBlog="" imageBlog="/img/linen-yard.jpg" titleBlog="Boost Your Confidence with a Bespoke Suit" dateBlog="August 8, 2022" commentBlog="0 Comments"></BlogItem>
                    <BlogItem linkBlog="" imageBlog="/img/linen-yard.jpg" titleBlog="Boost Your Confidence with a Bespoke Suit" dateBlog="August 8, 2022" commentBlog="0 Comments"></BlogItem>
                    <BlogItem linkBlog="" imageBlog="/img/linen-yard.jpg" titleBlog="Boost Your Confidence with a Bespoke Suit" dateBlog="August 8, 2022" commentBlog="0 Comments"></BlogItem>
                </div>
                <div className="text-center mt-10">
                    <Link href="" className="font-serif text-xl border-2 rounded-3xl py-3 px-12 hover:bg-dark hover:text-white transition duration-300">Xem Thêm</Link>
                </div>
            </div>
        </section>
    )
}

export default BlogComponent