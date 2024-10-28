export enum AvatarType{
    Small = 6,
    Big = 8
}

interface NameAvatarInput {
    name : string;
    size? : AvatarType;
}

export const NameAvatar = ({name, size=AvatarType.Small}:NameAvatarInput) =>{
    const nameParts = name.split(" ");
    const initials = (nameParts[0][0]).toUpperCase() + (nameParts[1] ? nameParts[1][0] : "").toUpperCase();
    const textSize = size == 6 ? "xs" : "sm";
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full`}>
        <span className={`font-medium text-${textSize} text-gray-600`}>{initials}</span>
    </div>
}