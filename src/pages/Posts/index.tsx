import { useParams } from "react-router-dom";
import { useCallback, useLayoutEffect, useState } from 'react'
import { PostInfo } from "./components/PostInfo";
import { InfoBody, MissingPost } from "./styles";
import { GitHubContext, PostDataType } from "../../contexts/GitHubContext";
import ReactMarkdown from 'react-markdown'
import { useContextSelector } from "use-context-selector";

export function Posts() {
    const { fetchPostByNumber, userData } = useContextSelector(GitHubContext, (context) => {
        return {
            fetchPostByNumber: context.fetchPostByNumber,
            userData: context.userData
        }
    })
    const { postNumber } = useParams()
    const [post, setPost] = useState({} as PostDataType)

    const fetchPost = useCallback(async (postNumber: number) => {
        try {
            const fetchedPost = await fetchPostByNumber(postNumber)
            setPost(fetchedPost)
        } catch (e) {
            console.log('Post não encontrado')
        }
    }, [fetchPostByNumber])

    useLayoutEffect(() => {
        postNumber && fetchPost(parseInt(postNumber))
    }, [fetchPost, postNumber])

    if (Object.values(post).length == 0) {
        return <MissingPost>Opps... Post não encontrado :)</MissingPost>
    }

    return (
        <div>
            <PostInfo post={post} author={userData.login} />
            <InfoBody>
                <ReactMarkdown>
                    {post.body}
                </ReactMarkdown>
            </InfoBody>
        </div>
    )
}