import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Landing} from "./Component/Landing";
import {ChatLandingPage} from "./Component/ChatLandingPage";
import * as io from "socket.io-client";
import './App.css';

function App() {
    const socket = io.connect("http://localhost:8080")
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing socket={socket} />}/>
                <Route path={"/chat"} element={<ChatLandingPage socket={socket}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
