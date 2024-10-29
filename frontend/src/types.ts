export interface BlogStructure{
    id : string;
    title: string;
    description: string;
    author: {
        id: string;
        name: string;
    };
}

export enum AvatarType{
    Small = 6,
    Big = 8
}