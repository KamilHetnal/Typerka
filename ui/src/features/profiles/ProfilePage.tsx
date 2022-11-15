import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

export default observer(function ProfilePage() {
    const { userName } = useParams<{ userName: string }>();
    const { profileStore } = useStore();
    const { loadingProfile, loadProfile, profile } = profileStore;

    useEffect(() => {
        loadProfile(userName);
    }, [loadProfile, userName])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />

    return (
        <Container text>
            {profile &&
                <>
                    <ProfileHeader profile={profile} />
                    <ProfileContent profile={profile} />
                </>
            }
        </Container>
    )
})