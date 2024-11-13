import { Link } from "react-router-dom";
import { NameAvatar } from "./NameAvatar";

interface CardInputs {
    id: string;
    authorName: string;
    title: string;
    description: string;
    publishedDate: string;
}

export const BlogCard = ({id, authorName, title, description, publishedDate}: CardInputs) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b px-6 lg:px-0 py-5 w-screen max-w-screen-md cursor-pointer">
            <div className="flex items-center text-sm">

                <div>
                    <NameAvatar name={authorName} /> 
                </div>

                <div className="pl-2">
                    {authorName}
                </div>
                
                <div className="pl-2">
                    {Circle()}
                </div>

                <div className="text-slate-400 pl-2">
                    {publishedDate}
                </div>
            </div>
            
            <div className="pt-3 text-xl font-semibold ">
                {title}
            </div>

            <div className="pt-3 text-md font-light">
                {description.length>100 ? description.slice(0,300)+"..." : description}
            </div>

            <div className="text-sm font-light text-slate-400 pt-5">
                {`${Math.ceil(description.split(" ").length / 100)}`} {description.split(" ").length > 100 ? " minutes read" : "minute"}
            </div>

        </div>
    </Link>
}

export function Circle(){
    return <div className="h-1 w-1 bg-slate-400 rounded-full">
    </div>
}