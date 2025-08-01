"use client";

import {PostProps} from "@/type/types";
import {useState} from "react";
import PostPreview from "@/components/PostPreview";
import NewPostForm from "@/components/NewPostForm";

export default function PostDisplay({inputPosts}:{inputPosts: PostProps[]}){
    const[posts, setPosts]=useState(inputPosts);
    return(
        <div className={`flex flex-col items-center h-auto`}>
            <NewPostForm
                appendAction={(newPost: PostProps)=>
                    setPosts([...posts, newPost])
                }
            />
            {
                posts.map((p)=>
                    <PostPreview key={p.id} post={p}/>
                )
            }
        </div>
    );
}