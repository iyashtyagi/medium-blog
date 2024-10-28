export interface BlogStructure{
    id : string;
    title: string;
    description: string;
    author: {
        id: string;
        name: string;
    };
}