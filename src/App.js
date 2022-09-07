import './App.css';
import {useState} from 'react';
import {Route, Routes} from "react-router"
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import {HashRouter} from 'react-router-dom';

function App() {
    const [songsList, setSongsList] = useState([])
    const [curSong, setCurSong] = useState({});

    return (
        <div className="App">
            <HashRouter>
                <Header songsList={songsList} setSongsList={setSongsList} setCurSong={setCurSong} curSong={curSong}/>
                <Routes>
                    <Route path='/' element={<Main curSong={curSong} songsList={songsList} setCurSong={setCurSong}/>}/>
                    <Route path='/:urlTitle' element={<Main curSong={curSong}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
