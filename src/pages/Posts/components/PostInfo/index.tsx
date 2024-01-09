import { CaretLeft , ArrowSquareOut } from "@phosphor-icons/react";
import github from '../../../../assets/github.svg'
import calendar from '../../../../assets/calendar.svg'
import speechBubble from '../../../../assets/speech-bubble.svg'
import {
    IconsContainer,
    PostHeader,
    PostInfoContainer
} from "./styles";
import { PostDataType } from "../../../../contexts/GitHubContext";
import { timeFromDate } from "../../../../utils/formatter";

interface PostInfoProps {
    post: PostDataType
    author: string
}

export function PostInfo({post, author}: PostInfoProps) {
    return (
        <PostInfoContainer>
            <PostHeader>
                <a href="../">
                    <CaretLeft  />
                    <span>VOLTAR</span>
                </a>
                <a href={post.html_url} target="_blank">
                    <span>VER NO GITHUB</span>
                    <ArrowSquareOut />
                </a>
            </PostHeader>
            <h2>{post.title}</h2>
            <IconsContainer>
                <div>
                    <img src={github} alt="" />
                    <span>{author}</span>
                </div>
                <div>
                    <img src={calendar} alt="" />
                    <span>{timeFromDate(post.created_at)}</span>
                </div>
                <div>
                    <img src={speechBubble} alt="" />
                    <span>{post.comments}</span>
                </div>
            </IconsContainer>
        </PostInfoContainer>
    )
}