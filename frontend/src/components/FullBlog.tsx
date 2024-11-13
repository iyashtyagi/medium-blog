import { AvatarType, BlogStructure } from "../types"
import { NameAvatar } from "./NameAvatar"

export const FullBlog = ({blog}:{blog:BlogStructure}) =>{
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>

                <div className="text-slate-500 pt-2">
                    Post on 2nd December 2023
                </div>

                <div className="pt-4">
                    {blog.description}
                </div>
            </div>
         
            <div className="col-span-4">
                <div className="text-slate-600 font-semibold ">
                    Author
                </div>

                <div className="flex items-center">
                    <div className="pr-4 ">
                        <NameAvatar size={AvatarType.Big } name={blog.author.name}/>
                    </div>
                    <div>    
                        <div className="text-xl font-bold">
                            {blog.author.name}
                        </div>
                        <div className="pt-2 text-slate-500">
                            <p>
                                Random catch phrase about the author's ability to grab the user's attention.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}