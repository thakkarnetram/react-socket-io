import {useState} from "react";

export const ChatSend = (({socket}: { socket: any }) => {
    const [message, setMessage] = useState<any | null>("");
    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem("user")) {
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("user"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            })
        }
        setMessage("")
    }
    return <>
        <div className='chat__footer'>
            <form className='form' onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Write message'
                    className='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    </>

})