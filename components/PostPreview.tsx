import {PostProps} from "@/type/types";
import styled from "styled-components";

const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 5% auto;
    border: 8px solid brown;
`;

export default function PostPreview({post}:{post:PostProps}){
    return(
        <StyledDiv>
            <h4>{post.title}</h4>
            <p>{String(Number(post.upvotes) - Number(post.downvotes))}</p>
        </StyledDiv>
    );

}