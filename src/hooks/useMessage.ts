import { useContext } from "react";
import { MessageContext, MsgValue } from "../context/MessageContext";

export function useMessage() {
    const context = useContext(MessageContext) as MsgValue
    if (!context) throw new Error("Message context provider is required");
    const { close, open, ref } = context
    return { close, open, ref }
}