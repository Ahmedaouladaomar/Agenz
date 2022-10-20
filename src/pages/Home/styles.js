import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '130px',
      width: '100%',
      height: '40%',
      position: 'relative'
    },
    contentRight: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '1000px',
      width: '50%',
    },
    cardsContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    },
    contentLeft: {
      position: 'relative',
      width: '50%',
      height: '1000px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '250px',
      width: '350px',
      margin: '5px',
      paddingBottom: '20px',
      boxShadow: '0 0 10px 0 lightgray', 
      transition: 'all .3s ease',
        '&:hover': {
          transform: 'translateY(-2px)' 
        }
    },
    image: {
      height: '70%',
      width: '100%'
    },
    cardContent: {
      height: '40%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'left',
      marginLeft: '10px'
      
    },
    price: {
      fontSize: '25px',
      fontWeight: '700'
    },
    description: {
      color: 'black',
      width: "100%",
      fontSize: '15px',
    },
    address: {
      color: 'black',
      width: "60%",
      fontSize: '16px',
    },
    author: {
      color: 'grey',
      width: "60%",
      fontSize: '14px',
    },
   
    titleContainer: {
      width:  '100%',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
     
    },

    title: {
      width: '100%',
      marginLeft: '20px',
      fontSize: '30px'
    },
    filterContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '20px',
      marginTop: '20px',
      marginBottom: '40px'
    },
    filter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: '1%',
      border: '1px solid lightgray',
      color: 'rgb(138,43,226)'
    },
    filtrerpar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: '700'

    },
    agentsNumber: {
      background: 'rgb(0,191,255)',
      position: 'absolute',
      left: '1%',
      padding: '10px',
      borderRadius: '50px',
      paddingRight: '30px',
      paddingLeft: '30px',
      color: 'white',
      fontWeight: '700',
      marginLeft: '10px'
    }
  };
});
