import Blogpagebody from "@/components/Blogpagebody"

const BlogPage = () => {
    return <>
        <div className="pt-6 mt-20 md:mt-12 pb-24 fadeIn p-4  flex flex-wrap justify-center gap-5">
            <p className="text-[48px]">BLOG</p>
            <Blogpagebody />
        </div>
    </>
}

export default BlogPage