import {NavLink} from "react-router-dom";
import classes from "./Home.module.css"
import musicIcon from "../../assets/backgrounds/music.svg"

const Home = (props) => {
    return (
        <section>
            <ul className={classes.songList}>
                {
                    props.songsList.map((song, key) => (
                            <li key={key} className={classes.item}>
                                <NavLink to={`/${song.url_title}`}  onClick={() => props.setCurSong(song)}>
                                    <img src={musicIcon} alt="music" className={classes.musicIcon}/>
                                    <span>{song.title}</span>
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