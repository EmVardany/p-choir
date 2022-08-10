import classes from './main.module.css';
import Tabs from "../Tabs/Tabs";
import Notes from "../Notes/Notes"
import {useEffect, useState} from "react";
import axios from "axios";
import config from '../../config/config';

const conf = config();

console.log(process.env.VERSION)


const Main = () => {
    const [curSong, setCurSong] = useState({});

    const url = `${conf.host.localServer}${conf.host.version}`

    const getData = async () => {
        await axios.get(`${url}/songs/ya_viruyu`).then((res) => {
            setCurSong(res.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className={classes.main}>
            {curSong?.partData?.length ? <Tabs data={curSong?.partData}/> : <div />}
            {curSong?.notes?.length ? <Notes images={curSong?.notes}/> : <div />}
        </section>
    )
}

export default Main;