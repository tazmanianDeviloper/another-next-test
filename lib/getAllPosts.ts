import {PostProps} from "@/type/types";
import getCollection, {POSTS_COLLECTION} from "@/db";

export default async function getAllPosts():Promise<PostProps[]> {

    const postsCollection=await getCollection(POSTS_COLLECTION);
    const data=await postsCollection.find().toArray();

    const posts: PostProps[]=data.map((p)=>
        (
            {
                id:p._id.toHexString(),
                title: p.title,
                content: p.content,
                upvotes: p.upvotes ?? p.upvote ?? 0,
                downvotes: p.downvotes ?? p.downvote ?? 0,
            }
        )
    )
    return posts.reverse();
}