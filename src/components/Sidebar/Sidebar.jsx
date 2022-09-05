import {slide as Menu} from 'react-burger-menu';
import {NavLink} from 'react-router-dom'
import burger_icon from "../../assets/backgrounds/burger-menu.svg";
import cross_icon from "../../assets/backgrounds/hide-burger-menu.svg"

const Sidebar = (props) => {
    const setCurSong = (song) => {
        props.setCurSong(song)
        return void 0;
    }

    return (
        <Menu right
              width={'70%'}
              customBurgerIcon={<img src={burger_icon}/>}
              customCrossIcon={<img src={cross_icon}/>}>
            <ul>
                {
                    props.songList.map((song, key) => (
                            <li key={key} className={song.url_title === props.curSong.url_title ? 'active-item' : 'menu-item'}>
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