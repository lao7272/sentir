import { ReactNode, Dispatch, SetStateAction } from 'react'
interface Section {
    image: string;
    section: number;
}
interface Events {
    image: string;
    title: string;
}
interface ContextProviderProps {
    children: ReactNode;
}
interface IntersectionContext {
    intersection: boolean
    setIntersection: Dispatch<SetStateAction<boolean>>
}
export {
    type Section,
    type Events,
    type ContextProviderProps,
    type IntersectionContext

}