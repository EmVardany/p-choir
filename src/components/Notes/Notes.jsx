import ImageGallery from 'react-image-gallery';
import './Notes.css';

const Notes = ({images}) => {
    return <ImageGallery items={images}
                         showNav={false}
                         showFullscreenButton={false}
                         showThumbnails={true}
                         showPlayButton={false}
                         infinite={false}/>;
}

export default Notes;