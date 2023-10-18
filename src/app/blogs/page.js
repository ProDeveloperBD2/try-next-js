import Link from "next/link";

export const metadata = {
    title: 'Next Hero | Blogs',
    description: 'Next Hero',
}

const blogs = [
    {
        id: 1,
        year: 2015,
        title: 'blogs 1'
    },
    {
        id: 2,
        year: 2013,
        title: 'blogs 2'
    },
    {
        id: 3,
        year: 2011,
        title: 'blogs 3'
    },
    {
        id: 4,
        year: 2017,
        title: 'blogs 4'
    },
    {
        id: 5,
        year: 2012,
        title: 'blogs 5'
    },
]
const BlogsPage = () => {
    return (
        <div>
            {
                blogs.map(blog => <Link href={{
                    pathname: `/blogs/${blog.year}/${blog.id}`,
                    query: {
                        title: blog.title
                    }
                }} key={blog.id}> <h2 className="text-3xl text-red-400 mb-4 cursor-pointer">{blog.title}</h2></Link>)
            }
        </div>
    );
};

export default BlogsPage;