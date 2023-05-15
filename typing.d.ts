interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: 'reference'
    }
}


export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    profilePic: Image
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: image;
    progress: number;
    title: string
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: image;
    progress: number;
    title: string
}

export interface Project extends SanityBody {
    _type: "project";
    image: image;
    title: string;
    summary: string;
    technologies: Technology[]
}

export interface Experience extends SanityBody {
    _type: "experience";
    companyImage: image;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[]
}