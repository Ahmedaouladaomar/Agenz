import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    
    navbar: {
      position: 'fixed',
      zIndex: '9999',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      paddingTop: '1%',
      top : '0%',
      height: '120px',
      width: '100%',
      borderBottom: '1px solid lightgray',
      transition: 'all .5s ease'
    },
    shadow: {
      position: 'fixed',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      paddingTop: '1%',
      background: 'white',
      height: '120px',
      width: '100%',
      borderBottom: '1px solid lightgray',
      boxShadow: '0px 3px 10px 0px lightgrey',
      transition: 'all .5s ease'
    },
    firstMenu: {
      width: '100%',
      display: 'flex',
      borderBottom: '1px solid lightgray',
    },
    secondMenu: {
      width: '100%',
      paddingTop: '1%',
      display: 'flex'
    },
    logo: {
      width: '150px',
      marginRight: '100px'
    },
    items: {
      margin: '0',
      padding: '0',
      listStyle: 'none',
      display: 'flex',
      position: 'relative',
    },
    item: {
      marginRight: '30px',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: 'black',
      borderRadius: '5px',
      cursor: 'pointer',
        "&:hover": {
          
        }
    },
    social: {
      position: 'absolute',
      right: '1%',
      display: 'flex',
      justifyContent: 'center'
    },
    search: {
      position: 'relative',
      background: 'whitesmoke',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '400px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '400px',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      right: '0%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '400px',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      width: '400px',
      // vertical padding + font size from searchIcon
      paddingLeft: '10px',
      paddingRight: '40px',
  
    },
    filterButton: {
      marginLeft: '10px'
    }
  };
});
