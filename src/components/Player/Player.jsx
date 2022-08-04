import ReactAudioPlayer from "react-audio-player";
import classes from "./Player.module.css";


const Player = ({audioSrc}) => {
    return (
        <ReactAudioPlayer
            src={audioSrc}
            className={classes.player}
            controls
        />
    )
}

export default Player;