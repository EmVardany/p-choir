import './App.css';
import {useState} from 'react';
import {Route, Routes} from "react-router"
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import {BrowserRouter} from 'react-router-dom';

function App() {
    const [songsList, setSongsList] = useState([])
    const [curSong, setCurSong] = useState({});

    return (
        <div className="App">
            <BrowserRouter>

                <Header songsList={songsList} setSongsList={setSongsList} setCurSong={setCurSong} curSong={curSong}/>
                <Routes>
                    <Route path='/:urlTitle' element={<Main curSong={curSong}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
