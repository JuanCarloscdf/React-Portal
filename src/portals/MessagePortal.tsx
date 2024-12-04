import { SetStateAction } from "react";
import { createPortal } from "react-dom";

const MessagePortal = ({ isActive, setIsActive }: { isActive: boolean, setIsActive: React.Dispatch<SetStateAction<boolean>> }) => {
    return createPortal(
        <div className={`${isActive ? "fixed" : "hidden"} top-0 left-0 w-full h-full`}>
            <div className="w-full h-full flex flex-col justify-center items-center bg-white">
                <button onClick={() => setIsActive(false)}>close</button>
                <h1>I'm rendering outside of the root div</h1>
            </div>
        </div>,
        document.getElementById("portals") as HTMLElement)
};

export default MessagePortal;