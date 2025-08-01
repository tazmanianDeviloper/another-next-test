"use client";

import {useState} from "react";
import {Button, FormHelperText, TextField} from "@mui/material";
import {Textarea} from "@mui/joy";
import createNewPost from "@/lib/createNewPost";
import {PostProps} from "@/type/types";

export default function NewPostForm({appendAction,}:{appendAction:(post: PostProps)=>void}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <form
            className={`w-96 rounded-xl p-4 bg-sky-400`}
            onSubmit={async (event) => {
                event.preventDefault();
                createNewPost(title, content)
                    .then((newPost) => appendAction(newPost))
                    .catch((err) => console.log("This error occurred: " + err));
            }
            }
        >
            <TextField
                variant={`filled`}
                sx={{backgroundColor: "white", width: "100%"}}
                label={`Title`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant={`soft`}
                placeholder={`content`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <FormHelperText> What&apos; on your mind?</FormHelperText>
            <div className={`w-full flex justify-center`}>
                <Button
                    sx={{width: "80px"}}
                    variant={`contained`}
                    type={`submit`}
                    disabled={title === "" || content === ""}
                >
                    Create
                </Button>
            </div>
        </form>

    );
}