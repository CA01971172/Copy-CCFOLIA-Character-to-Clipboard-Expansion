import { createContext, ReactNode } from 'react';

type ContextInfo = {

};

const defaultContext: ContextInfo = {

};

export const HogeContext = createContext<ContextInfo>(defaultContext);

// データを管理するcontext
export function HogeProvider({ children }: { children: ReactNode }){

    return (
        <HogeContext.Provider
                value={{

                }}
        >
            {children}
        </HogeContext.Provider>
    );
}
