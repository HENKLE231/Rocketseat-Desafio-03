import { Profile } from "./components/Profile";
import { timeFromDate } from "../../utils/formatter";
import {
    PostCard,
    PostCardContainer,
    SearchBarHeader,
} from "./styles";
import { GitHubContext } from "../../contexts/GitHubContext";
import { SearchBar } from "./components/SearchBar";
import { useContextSelector } from "use-context-selector";

export function Home() {
    const { userData, postsData } = useContextSelector(GitHubContext, (context) => {
        return {
            userData: context.userData,
            postsData: context.postsData
        }
    })

    return (
        <div>
            <Profile userData={userData} />

            <SearchBarHeader>
                <h3>Publicações</h3>
                <span>
                    {
                        postsData.length > 1 ?
                        postsData.length + ' publicações.' :
                        postsData.length + ' publicação.'
                    }
                </span>
            </SearchBarHeader>

            <SearchBar />
            
            <PostCardContainer>
                {
                    postsData.length > 0 &&
                        postsData.map((postData) => {
                            return (
                                <PostCard href={'Posts/' + postData.number} key={postData.number}>
                                    <header>
                                        <div>
                                            <h3>{postData.title}</h3>
                                        </div>
                                        <span>{timeFromDate(postData.created_at)}</span>
                                    </header>
                                    <div>
                                        <p>{postData.body}</p>
                                    </div>
                                </PostCard>
                            )
                        })
                }
            </PostCardContainer>
        </div>
    )
}