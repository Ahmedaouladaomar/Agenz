import { useState, useEffect } from 'react';
import logo from '../../images/agenz-logo.png';
import maroc from '../../images/maroc.png';
import LaunchIcon from '@material-ui/icons/Launch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles'
import { Avatar, Button } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

const NavBar = ({ shadow }) => {
    const classes = useStyles();
    const [show, setShow] = useState(shadow);

    const onScrollNavbar = () => {
        window.scrollY > 0 ? setShow(true) : setShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollNavbar)
        return () => window.removeEventListener('scroll', onScrollNavbar)
    },[])

    return (
        <div className={ show ? classes.shadow : classes.navbar }>
            <div className={classes.firstMenu}>
                <img className={classes.logo} src={logo} alt='logo'/>
                <ul className={classes.items}>
                    <li className={classes.item}><ArrowDropDown />Acheter</li>
                    <li className={classes.item}>Louer</li>
                    <li className={classes.item}><ArrowDropDown />Estimer</li>
                    <li className={classes.item}>Prix immobiliers</li>
                    <li className={classes.item}><ArrowDropDown />Crédits agences</li>
                </ul>
                <ul className={classes.social}>
                    <li className={classes.item}> 
                        Arabe<Avatar style={{ marginRight: '5px',width: '25px', height: '25px'}} alt="maroc" src={maroc} />
                    </li>
                    <li className={classes.item}><div>Connexion</div><AccountCircleIcon /></li>
                    <li className={classes.item}><div>Offres pro</div><LaunchIcon /></li>
                </ul>
            </div>
            <div className={classes.secondMenu}>
                 <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Entrez une ville, un quartier, une adresse"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.filterButton}>
                    <Button variant="outlined" color="primary">
                        À vendre
                    </Button>
                </div>
                <div className={classes.filterButton}>
                    <Button variant="outlined" color="primary">
                        Prix
                    </Button>
                </div>
                <div className={classes.filterButton}>    
                    <Button variant="outlined" color="primary">
                        Type
                    </Button>
                </div>
                <div className={classes.filterButton}>    
                    <Button variant="outlined" color="primary">
                        Surface
                    </Button>
                </div>
                <div className={classes.filterButton}>    
                    <Button variant="outlined" color="primary">
                        Chambres
                    </Button>
                </div>    
                <div className={classes.filterButton}>
                    <Button variant="contained" color="primary">
                        Valider
                    </Button>
                </div>
             
            </div>
           
        </div>
    )
}

export default  NavBar;