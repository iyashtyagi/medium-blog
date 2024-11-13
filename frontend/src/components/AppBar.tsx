import { Link } from "react-router-dom";
import { AvatarType } from "../types";
import { NameAvatar } from "./NameAvatar";

export const AppBar = () => {
    return <div className="flex justify-between px-6 pt-3 pb-2 border-b">
        <div className="flex">
            <Link to={"/blogs"}>
                <div className="text-3xl font-bold cursor-pointer">
                    Medium
                </div>
            </Link>

        </div>
        <div>
        <Link to={"/publish"}>
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New Post</button>   
        </Link>
            <NameAvatar name="Yash Tyagi" size={AvatarType.Big}/>
        </div>
    </div>
}