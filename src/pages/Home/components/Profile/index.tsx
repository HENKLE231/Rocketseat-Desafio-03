import { ArrowSquareOut } from "@phosphor-icons/react";
import {
    ProfileContainer,
    ProfileImgContainer,
    ProfileInfoContainer,
    ProfileHeader,
    IconsContainer
} from "./styles";
import github from '../../../../assets/github.svg'
import building from '../../../../assets/building.svg'
import people from '../../../../assets/people.svg'
import { UserDataType } from '../../../../contexts/GitHubContext'

interface ProfileProps {
    userData: UserDataType
}

export function Profile({ userData }: ProfileProps) {
    return (
        <ProfileContainer>
            <ProfileImgContainer>
                <img src={userData.avatar_url} alt="" />
            </ProfileImgContainer>
            <ProfileInfoContainer>
                <ProfileHeader>
                    <h2>{userData.name}</h2>
                    <a href={userData.html_url} target="_blank">
                        <div>
                            <span>GITHUB</span>
                            <ArrowSquareOut />
                        </div>
                    </a>
                </ProfileHeader>
                {
                    userData.bio && <p>{userData.bio}</p>
                }
                <IconsContainer>
                    <div>
                        <img src={github} alt="" />
                        <span>{userData.login}</span>
                    </div>
                    {
                        userData.company && 
                        <div>
                            <img src={building} alt="" />
                            <span>{userData.company}</span>
                        </div>
                    }
                    <div>
                        <img src={people} alt="" />
                        <span>{userData.followers} seguidores</span>
                    </div>
                </IconsContainer>
            </ProfileInfoContainer>
        </ProfileContainer>
    )
}