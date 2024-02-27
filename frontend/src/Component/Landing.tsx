import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Landing = (({socket}: any) => {
        // State Management

        const [name, setName] = useState("");
        const navigate = useNavigate();

        const handleSubmit = (e: any) => {

            e.preventDefault();
            localStorage.setItem("user", name)
            socket.emit("newUser", {name, socketId: socket.id});
            if (name.length > 0) {
                navigate("/chat");
            }
        }
        return <>
            <div>
                <h3>Enter username</h3>
                <form onSubmit={handleSubmit}>
                    <input type={"name"} name={name} value={name} onChange={e => setName(e.target.value)}/>
                    <input type={"submit"} value={"Submit"}/>
                </form>
            </div>
        </>
    }
)