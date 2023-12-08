import { POST } from "@/app/api/blogs/route";
import exp from "constants";

type POST = {
    id: number;
    title: string;
    desc: string;
    date: Date;

}
let posts: POST[] =[];

// FOR QUERYING THE DATA BASE 

// HANDLER FUNCTION=which will handle the data request
export const getPosts = () => posts;

export const addPost = (post: POST) => {
    posts.push(post);
}

export const deletePOST = (id: number) => {
    posts= posts.filter((post) => post.id !== id);
}

export const updatePOST = (id: number, title: string , desc : string) => {
    const post =posts.find((post) => post.id === id);
    if(post){
        post.title = title;
        post.desc = desc;

    }else{
        throw new Error("post not found");
    }
};

export const getPostById = (id: number) => {
    return posts.find((post) => post.id === id);

};