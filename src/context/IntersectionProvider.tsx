import { createContext, useState} from "react";
import { IntersectionContext as intersectionContext, ContextProviderProps } from '../types/types'
export const IntersectionContext = createContext<intersectionContext | undefined>(undefined);

export const IntersectionProvider = ({ children }:ContextProviderProps) => {
    const [ intersection, setIntersection ] = useState(false);
    return (
        <IntersectionContext.Provider value={{ intersection, setIntersection }}>
            {children}
        </IntersectionContext.Provider>
    )
}