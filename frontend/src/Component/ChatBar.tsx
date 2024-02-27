import {useEffect, useState} from "react";

export const ChatBar = (({socket}: { socket: any }) => {
    const [activeUsers, setActiveUsers] = useState<any>([]);

    useEffect(() => {
        socket.on("newUserRes", (data: any) => {
            setActiveUsers(data);
        })
    }, [    activeUsers]);

    return <>
        <section>
            <div className={"chat__users"}>
                Active Users
            </div>
            {activeUsers.map((res: any) => (
                res.name === localStorage.getItem("user") ? (
                    <h4 key={res.socketId}>You - {res.name}</h4>
                ) : (
                    <h4 key={res.socketId}>{res.name}</h4>
                )
            ))}
        </section>
    </>
})