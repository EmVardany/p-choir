import {NavLink} from "react-router-dom";
import classes from "./Home.module.css"

const Home = (props) => {
    return (
        <section>
            <ul className={classes.songList}>
                {
                    props.songsList.map((song, key) => (
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

export default Home;