import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

export type MsgMethods = {
    open: () => void;
    close: () => void;
}

const MessageRefPortal = forwardRef<MsgMethods>((_, ref) => {
    const [isActive, setIsActive] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsActive(true),
        close: () => setIsActive(false)
    }))


    return createPortal(
        <div className={`${isActive ? "fixed" : "hidden"} top-0 left-0 w-full h-full`}>
            <div className="w-full h-full bg-white flex flex-col justify-center items-center">
                <button onClick={() => setIsActive(false)}>close</button>
                <p>this portal was build usinf forwardref this need a ref for start to work</p>
            </div>
        </div>,
        document.getElementById("portals") as HTMLElement)
});

export default MessageRefPortal;