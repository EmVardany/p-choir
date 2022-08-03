import classes from './header.module.css';
import logo from '../../assets/backgrounds/header-logo.png';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <p className={classes.verse}>
                <span>Хвали, душе моя, Господа</span>
                <span>Пс. 146:1</span>
            </p>
        </header>
    )
}

export default Header;