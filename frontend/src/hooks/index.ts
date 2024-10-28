import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BlogStructure } from "../types";

export const useBlogs = () => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [blogs, setBlogs] = useState<BlogStructure[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/blog/bulk`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}` 
            }
        })
        .then(res => {
            setBlogs(res.data.blogs);
            setLoading(false);
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    return {
        loading,
        blogs
    }
}