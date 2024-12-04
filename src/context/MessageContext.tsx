import { createContext, MutableRefObject, ReactNode, useCallback, useRef } from "react";
import { MsgMethods } from "../portals/MessageRefPortal";


export type MsgValue = {
    open: () => void,
    close: () => void,
    ref: MutableRefObject<MsgMethods | null>
}
export const MessageContext = createContext<MsgValue | null>(null)

export const MessageProvider = ({ children }: { children: ReactNode }) => {
    const msgRef = useRef<MsgMethods>(null)

    const open = useCallback(() => {
        msgRef.current?.open()
    }, [])
    const close = useCallback(() => {
        msgRef.current?.close()
    }, [])

    const value = {
        open,
        close,
        ref: msgRef
    }

    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}