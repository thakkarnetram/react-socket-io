import {useEffect, useRef, useState} from "react";
import {ChatBar} from "./ChatBar";
import {ChatBody} from "./ChatBody";
import {ChatSend} from "./ChatSend";

export const ChatLandingPage = ({socket}: { socket: any }) => {
    const [messageData, setMessageData] = useState<any|null>([]);
    const lastMessageRef = useRef<any | null>(null);

    useEffect(() => {
        socket.on("messageRes", (data: any) => {
            setMessageData((res: any) => [...res, data])
        })
        return () => socket.off("messageRes");
    }, [messageData]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messageData]);

    return <>
        <div>
            <ChatBar socket={socket}/>
        </div>
            <div>
                <ChatBody messageData={messageData} lastMessageRef={lastMessageRef}/>
                <ChatSend socket={socket}/>
            </div>
    </>
}