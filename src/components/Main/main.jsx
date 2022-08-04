import classes from './main.module.css';
import Tabs from "../Tabs/Tabs";
import Notes from "../Notes/Notes"
import ImageGallery from 'react-image-gallery';

const data = [
    {
        heading: "Сопрано",
        audioSrc: require("../../assets/audios/Soprano/ya_viruyu.mp3")
    },
    {
        heading: "Альт",
        audioSrc: require("../../assets/audios/Alt/ya_viruyu.mp3")
    },
    {
        heading: "Тенор",
        audioSrc: require("../../assets/audios/Tenor/ya_viruyu.mp3")
    },
    {
        heading: "Бас",
        audioSrc: require("../../assets/audios/Bass/ya_viruyu.mp3")
    }
];

const images = [
    {
        original: require('../../assets/lyrics/page1.jpeg'),
        thumbnail: require('../../assets/lyrics/page1.jpeg'),
    },
    {
        original: require('../../assets/lyrics/page2.jpeg'),
        thumbnail: require('../../assets/lyrics/page2.jpeg'),
    },
    {
        original: require('../../assets/lyrics/page3.jpeg'),
        thumbnail: require('../../assets/lyrics/page3.jpeg'),
    },
];

const Main = () => {
    return (
        <section className={classes.main}>
            <Tabs data={data}/>
            <Notes images={images}/>
        </section>
    )
}

export default Main;