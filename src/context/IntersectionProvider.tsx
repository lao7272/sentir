import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
interface ContextProviderProps {
    children: ReactNode;
}
interface IntersectionContext {
    intersection: boolean
    setIntersection: Dispatch<SetStateAction<boolean>>
}
export const IntersectionContext = createContext<IntersectionContext | undefined>(undefined);

export const IntersectionProvider = ({ children }:ContextProviderProps) => {
    const [ intersection, setIntersection ] = useState(false);
    return (
        <IntersectionContext.Provider value={{ intersection, setIntersection }}>
            {children}
        </IntersectionContext.Provider>
    )
}