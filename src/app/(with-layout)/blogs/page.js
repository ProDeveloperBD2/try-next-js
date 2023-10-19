import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";

export const metadata = {
    title: 'Next Hero | Blogs',
    description: 'Next Hero',
}

// const blogs = [
//     {
//         id: 1,
//         year: 2015,
//         title: 'blogs 1'
//     },
//     {
//         id: 2,
//         year: 2013,
//         title: 'blogs 2'
//     },
//     {
//         id: 3,
//         year: 2011,
//         title: 'blogs 3'
//     },
//     {
//         id: 4,
//         year: 2017,
//         title: 'blogs 4'
//     },
//     {
//         id: 5,
//         year: 2012,
//         title: 'blogs 5'
//     },
// ];
const BlogsPage = async () => {
    const blogs = await loadBlogsData();
    return (
        <div className="mt-10">
            {
                blogs.map(blog => <div key={blog.id} className="border-blue-600 border-2 p-5 mb-4 container mx-auto">
                    <h2 className="text-3xl text-red-400 mb-2">{blog.id}. {blog.title}</h2>
                    <h4 className="text-black text-lg">{blog.body}</h4>
                    <Link href={`/blogs/${blog.id}`} >
                        <button className="btn mt-4 bg-blue-500 text-white px-2 py-1">Details</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;