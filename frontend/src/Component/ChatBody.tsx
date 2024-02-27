import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const ChatBody = (({messageData, lastMessageRef}: { messageData: any, lastMessageRef: any }) => {
    const navigation = useNavigate();


    const handleExit = () => {
        localStorage.removeItem("user");
        navigation("/")
        window.location.reload();
    }

    return <>
        <section>
            <div>Leave Chat</div>
            <button onClick={handleExit}>Leave</button>
        </section>
        <section>
            <div>Messages</div>
            {messageData.map((data: any) => (
                <div key={data.id}>
                    <p><i>Name :</i> {data.name}</p>
                    <p><b>Message :</b> {data.text}</p>
                </div>
            ))}
            <div ref={lastMessageRef}/>
        </section>
    </>
})