import { AvatarType } from "../types";

interface NameAvatarInput {
    name : string;
    size? : AvatarType;
    loading? : boolean;
}

export const NameAvatar = ({name, size=AvatarType.Small, loading=false}:NameAvatarInput) =>{
    const nameParts = name.split(" ");
    const initials = (nameParts[0][0]).toUpperCase() + (nameParts[1] ? nameParts[1][0] : "").toUpperCase();
    const sizeClass = size === AvatarType.Small ? "w-6 h-6" : "w-8 h-8";
    const textSize = size == 6 ? "text-xs" : "text-sm";
    if(loading){
        return <div className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden bg-gray-100 rounded-full`}>
            <span className={`font-medium ${textSize} text-gray-600`}></span>
        </div>
    }
    return <div className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden bg-gray-100 rounded-full`}>
        <span className={`font-medium ${textSize} text-gray-600`}>{initials}</span>
    </div>
}