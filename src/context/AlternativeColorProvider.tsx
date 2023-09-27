import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
interface ContextProviderProps {
    children: ReactNode;
}
interface AlternativeColorContext {
    isAlt: boolean
    setIsAlt: Dispatch<SetStateAction<boolean>>
}
export const AlternativeColorContext = createContext<AlternativeColorContext | undefined>(undefined);

export const AlternativeColorProvider = ({ children }:ContextProviderProps) => {
    const [ isAlt, setIsAlt ] = useState(false);
    return (
        <AlternativeColorContext.Provider value={{ isAlt, setIsAlt }}>
            {children}
        </AlternativeColorContext.Provider>
    )
}