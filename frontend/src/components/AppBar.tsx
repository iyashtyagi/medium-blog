import { AvatarType, NameAvatar } from "./NameAvatar";

export const AppBar = () => {
    return <div className="flex justify-between px-6 pt-3 pb-2 border-b">
        <div className="flex">
            <div className="text-3xl font-bold">
                Medium
            </div>

        </div>
        <div>
            <NameAvatar name="Yash Tyagi" size={AvatarType.Big}/>
        </div>
    </div>
}