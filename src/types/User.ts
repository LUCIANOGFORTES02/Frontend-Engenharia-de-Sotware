export type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    description:string;
    profileImage:string
    confirmPassword?: string;
    media: {
        audio: number,
        video: number,
        image: number,
    }
}