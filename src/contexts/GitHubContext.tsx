import {
    ReactNode,
    useCallback,
    useState,
    useLayoutEffect
} from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector"

interface GithubProviderProps {
    children: ReactNode
}

export interface UserDataType {
    avatar_url: string
    bio: string
    company: string
    followers: number
    html_url: string
    login: string
    name: string
    repos_url: string
}

export interface PostDataType {
    number: number
    title: string
    body: string
    comments: number
    created_at: string
    html_url: string
}

interface GitHubContextType {
    userData: UserDataType
    postsData: PostDataType[]
    fetchPosts: (text?: string) => void
    fetchPostByNumber: (postNumber: number) => Promise<PostDataType>
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubContextProvider({ children }: GithubProviderProps) {
    const [userData, setUserData] = useState({} as UserDataType)
    const [postsData, setPostsData] = useState({} as PostDataType[])

    const fetchUser = useCallback(async () => {
        const response = await api.get('users/HENKLE231')
        const newUserData = {
            avatar_url: response.data.avatar_url,
            bio: response.data.bio,
            company: response.data.company,
            followers: response.data.followers,
            html_url: response.data.html_url,
            login: response.data.login,
            name: response.data.name,
            repos_url: response.data.repos_url
        }

        setUserData(newUserData)
    }, [])
    
    const fetchPosts = useCallback(async (text?: string) => {
        let query = 'repo:HENKLE231/Rocketseat-Desafio-03'

        if (text) {
            query = `${text} ${query}`
        }

        const response = await api.get('search/issues', {
            params: {q: query}
        })
        
        const newPostsData = [] as PostDataType[]

        for (const post of response.data.items) {
            newPostsData.push({
                number: post.number,
                title: post.title,
                body: post.body,
                comments: post.comments,
                created_at: post.created_at,
                html_url: post.html_url
            })
        }
        setPostsData(newPostsData)
    }, [])

    useLayoutEffect(() => {
        fetchUser()
        fetchPosts()
    }, [fetchUser, fetchPosts])

    async function fetchPostByNumber(postNumber: number) {
        const response = await api.get('repos/HENKLE231/Rocketseat-Desafio-03/issues/' + postNumber)

        const post: PostDataType = {
            number: response.data.number,
            title: response.data.title,
            body: response.data.body,
            comments: response.data.comments,
            created_at: response.data.created_at,
            html_url: response.data.html_url
        }

        return post
    }

    return (
        <GitHubContext.Provider
            value={
                {
                    userData,
                    postsData,
                    fetchPostByNumber,
                    fetchPosts
                }
            }
        >
            {children}
        </GitHubContext.Provider>
    )
}