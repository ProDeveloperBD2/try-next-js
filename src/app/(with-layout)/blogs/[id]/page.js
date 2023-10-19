import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);
    return {
        title: `Next Hero | Blog | ${title}`,
    };
};
export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();
    return blogs.map(({ id }) => ({
        id: id.toString(),
    }))
}
const SingleBlog = async ({ params }) => {
    const blog = await loadSingleBlogData(params.id);
    return (
        <div>
            <h3>This is single blog. Year: {new Date().getFullYear()} ID: {params.id || 'No id'}</h3>
            <div className="border-blue-600 border-2 p-5 mb-4 container mx-auto">
                <h2 className="text-3xl text-red-400 mb-2">{blog.id}. {blog.title}</h2>
                <h4 className="text-black text-lg">{blog.body}</h4>
                <Link href="/blogs">
                    <button className="btn mt-4 bg-blue-500 text-white px-2 py-1">Back To Blogs</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleBlog;