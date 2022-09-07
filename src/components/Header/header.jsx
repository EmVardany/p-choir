import classes from './header.module.css';
import logo from '../../assets/backgrounds/header-logo.png';
import Sidebar from "../Sidebar/Sidebar";
import '../Sidebar/sidebar.css'
import axios from "axios";
import {useEffect} from "react";

import config from '../../config/config';

const conf = config();


const Header = (props) => {
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${conf.host.url_live}/songs`);
                props.setSongsList(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);


    return (
        <header className={classes.header} id="outer-container">
            <img src={logo} alt="logo" className={classes.logo}/>
            <p className={classes.verse}>
                <span>Хвали, душе моя, Господа</span>
                <span>Пс. 146:1</span>
            </p>
            <Sidebar songList={props.songsList} setCurSong={props.setCurSong} curSong={props.curSong}
                     pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right/>
        </header>
    )
}

export default Header;