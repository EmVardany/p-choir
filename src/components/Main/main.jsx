import classes from './main.module.css';

import AudioPlayer from "../Player/AudioPlayer";
import tracks from "../Player/tracks";

const Main = () => {
    return (
        <section className={classes.main}>
            <div className={classes.header}>
                <button>Сопрано</button>
                <button>Альт</button>
                <button>Тенор</button>
                <button>Бас</button>
            </div>
            <div>
                <AudioPlayer tracks={tracks} />
            </div>
            <div className={classes.content}>content</div>
        </section>
    )
}

export default Main;