import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { AppBar } from "../components/AppBar";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id : id || ""
    });

    if(loading){
        return <div>
            loading...
        </div>
    }

    return <div>
        <AppBar />
        {blog ? <FullBlog blog={blog} /> : <div>Blog not found</div>}
    </div>
}