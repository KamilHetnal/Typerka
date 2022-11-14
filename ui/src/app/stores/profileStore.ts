import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Photo, Profile } from '../models/Profile';
import { store } from './store';

export default class ProfileStore {
  profile: Profile | null = null;
  profiles: Profile[] | null = [];
  loadingProfile = false;
  uploading = false;
  activeTab: number = 0;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isCurrentUser() {
    if (store.userStore.user && this.profile) {
      return store.userStore.user.username === this.profile.userName;
    }
    return false;
  }

  loadProfiles = async() => {
    this.setLoadingInitial(true);
    try {
      const profiles = await agent.Profiles.list()
      profiles.forEach((profile) => {
        runInAction(() => {
          this.profiles?.push(profile);
        })
      });
      this.setLoadingInitial(true);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(true);
    }
  }

  loadProfile = async (userName: string) => {
    this.loadingProfile = true;
    try {
      const profile = await agent.Profiles.get(userName);
      runInAction(() => {
        this.profile = profile;
        this.loadingProfile = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.loadingProfile = false));
    }
  };

  deleteProfile = async (id: string) => {
    try {
      await agent.Profiles.delete(id);
      runInAction(() => {
      });
    } catch (error) {
      console.log(error);
    }
  };

  uploadPhoto = async (file: Blob) => {
    this.uploading = true;
    try {
      const response = await agent.Profiles.uploadPhoto(file);
      const photo = response.data;
      runInAction(() => {
        if (this.profile) {
          this.profile.photos?.push(photo);
          if (photo.isMain && store.userStore.user) {
            store.userStore.setImage(photo.url);
            this.profile.image = photo.url;
          }
        }
        this.uploading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.uploading = false));
    }
  };
  setMainPhoto = async (photo: Photo) => {
    this.setLoadingInitial(true);
    try {
      await agent.Profiles.setMainPhoto(photo.id);
      store.userStore.setImage(photo.url);
      runInAction(() => {
        if (this.profile && this.profile.photos) {
          this.profile.photos.find((p) => p.isMain)!.isMain = false;
          this.profile.photos.find((p) => p.id === photo.id)!.isMain = true;
          this.profile.image = photo.url;
          this.setLoadingInitial(false);
        }
      });
    } catch (error) {
      runInAction(() => (this.setLoadingInitial(false)));
      console.log(error);
    }
  };
  deletePhoto = async (photo: Photo) => {
    this.setLoadingInitial(true);
    try {
      await agent.Profiles.deletePhoto(photo.id);
      runInAction(() => {
        if (this.profile) {
          this.profile.photos = this.profile.photos?.filter(
            (p) => p.id !== photo.id
          );
          this.setLoadingInitial(true);
        }
      });
    } catch (error) {
      runInAction(() => (this.setLoadingInitial(false)));
      console.log(error);
    }
  };

  setActiveTab = (activeIndex: number) => {
    this.activeTab = activeIndex;
} 

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
