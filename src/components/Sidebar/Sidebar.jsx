import {slide as Menu} from 'react-burger-menu';
import {NavLink} from 'react-router-dom';
import {useState} from "react";
import burger_icon from "../../assets/backgrounds/burger-menu.svg";
import cross_icon from "../../assets/backgrounds/hide-burger-menu.svg"

const Sidebar = (props) => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    const setCurSong = (song) => {
        props.setCurSong(song)
        closeSideBar();
        return void 0;
    }

    return (
        <Menu right
              width={'70%'}
              customBurgerIcon={<img src={burger_icon} alt={"burger-icon"}/>}
              customCrossIcon={<img src={cross_icon} alt={"cross-icon"}/>}
              isOpen={isOpen}
              onOpen={handleIsOpen}
              onClose={handleIsOpen}
        >
            <ul>
                {
                    props.songList.map((song, key) => (
                            <li key={key}
                                className={song.url_title === props.curSong.url_title ? 'active-item' : 'menu-item'}>
                                <NavLink to={`/${song.url_title}`}
                                         onClick={() => setCurSong(song)}>
                                    {song.title}
                                </NavLink>
                            </li>
                        )
                    )
                }
            </ul>
        </Menu>

    );
}

export default Sidebar;