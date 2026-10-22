import type {IconType} from "react-icons";

export type Lang = 'sq' | 'en'

export type TeamMember = {
    name: string;
    role: string;
    bio: string;
    photo: string;
    linkedin?: string;
    email?: string;
}

export type ContactType = {
    title: string;
    recap: string;
    description: string;
    icon: IconType;
}
