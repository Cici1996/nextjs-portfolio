import { Experience } from "../../typing"

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`)

    const data = await res.json()
    const response: Experience[] = data.experience;
    return response
}