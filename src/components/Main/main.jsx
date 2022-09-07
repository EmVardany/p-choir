import classes from './main.module.css';
import Tabs from "../Tabs/Tabs";
import Notes from "../Notes/Notes"
import {NavLink} from "react-router-dom";

const Main = (props) => {
    const curSong = props.curSong;
    const songsList = props.songsList;

    if (!songsList) {
        return (
            <section className={classes.main}>
                {curSong?.partData?.length ? <Tabs data={curSong?.partData}/> : <div/>}
                {curSong?.notes?.length ? <Notes images={curSong?.notes}/> : <div/>}
            </section>
        )
    } else {
        return (
            <section className={classes.main}>
                <ul>
                    {
                        songsList.map((song, key) => (
                                <li key={key}
                                    className={classes.item}>
                                    <NavLink to={`/${song.url_title}`}
                                             onClick={() => props.setCurSong(song)}>
                                        {song.title}
                                    </NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </section>
        )
    }


}

export default Main;