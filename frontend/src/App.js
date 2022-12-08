import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import ChatRoom from "./Component/ChatRoom";
import Login from "./Auth/Login";
import {useEffect} from "react";
import UserList from "./Component/UserList";

function App() {
    return (
        <BrowserRouter>
            <div className="row">
                <Sidebar/>
                <div className="col">
                    <h1 className="home-slogan font-normal text-center mb-5">UpToShare</h1>
                    <h2 className="font-normal text-center mb-5">Le lieu de partage ultime</h2>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/user-list'} element={<UserList/>}/>
                        {/*<Route path='/login' element={<Login/>}/>*/}
                        {/*<Route path='/chat/:topic' element={*/}
                        {/*    <NeedAuth>*/}
                        {/*        <ChatRoom/>*/}
                        {/*    </NeedAuth>*/}
                        {/*}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;