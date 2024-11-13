import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if(loading){
        return <div>
            <AppBar />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
    }

    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name} title={blog.title} description={blog.description} publishedDate="13 May"/>)}
            </div>
        </div>
    </div>
}