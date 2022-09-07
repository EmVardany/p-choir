import classes from './main.module.css';
import Tabs from "../Tabs/Tabs";
import Notes from "../Notes/Notes"

const Main = (props) => {
    const curSong = props.curSong;

    return (
        <section className={classes.main}>
            {curSong?.partData?.length ? <Tabs data={curSong?.partData}/> : <div/>}
            {curSong?.notes?.length ? <Notes images={curSong?.notes}/> : <div/>}
        </section>
    )
}

export default Main;