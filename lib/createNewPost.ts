"use server";

import {PostProps} from "@/type/types";
import getCollection, {POSTS_COLLECTION} from "@/db";

export default async function createNewPost(title:string, content:string):Promise<PostProps>{
    console.log("Creating a new post");
    const p={
        title:title,
        content:content,
        upvote:4,
        downvote:5,
    }

    const postCollection =await getCollection(POSTS_COLLECTION);
    const res=postCollection.insertOne({...p});

    if(!res){
        throw new Error("DB insert failed");
    }

    return {...p, id: (await res).insertedId.toHexString(), upvotes:4, downvotes:5};

}