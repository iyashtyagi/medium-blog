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
            <NameAvatar name="Yash Tyagi" size={AvatarType.Big}/>
        </div>
    </div>
}