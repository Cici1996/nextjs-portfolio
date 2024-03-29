import { Skill } from "../../typing"

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`)

    const data = await res.json()
    const response: Skill[] = data.skills;
    return response
}