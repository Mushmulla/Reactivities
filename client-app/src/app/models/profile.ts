export interface IProfile {
    displayName: string,
    username: string,
    bio: string,
    following: boolean,
    followersCount: number,
    followingCount: number,
    image: string,
    photos: IPhoto[]
}

export interface IPhoto {
    id: string,
    url: string,
    isMain: boolean
}

export interface IUserActivity {
    id: string,
    title: string,
    category: string,
    date: Date

}