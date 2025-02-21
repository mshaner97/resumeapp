import { createContext, useContext } from "react";

export const AppStateContext = createContext(null)
export const AppDispatchContext = createContext(null)

export function useAppStateContext() {
    const context = useContext(AppStateContext)
    if (!context) throw new Error('Cannot use AppStateContext outside of AppStateContext.Provider')
    return context
}
export function useAppDispatchContext() {
    const context = useContext(AppDispatchContext)
    if (!context) throw new Error('Cannot use AppDispatchContext outside of AppDispatchContext.Provider')
    return context
}