import React from 'react';
import NavBar from '../../components/NavBar';
import GoogleMapReact from 'google-map-react';
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";
import useStyles from './styles';
import { ArrowDropDown } from '@material-ui/icons';

const Home = () => {
  const classes = useStyles();

  // proprs for google map
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  // cards data
  const cards = [
    {
      url: image1,
      price: '1,234,445',
      description: 'Maison à vendre | 8 chambres | 300 m2',
      address: 'Rabat agdal',
      author: 'Agdal agency',
      timePosted: '3 days ago'
    },
    {
      url: image2,
      price: '1,234,445',
      description: 'Maison à vendre | 8 chambres | 300 m2',
      address: 'Rabat agdal',
      author: 'Agdal agency',
      timePosted: '3 days ago'
    },
    {
      url: image3,
      price: '1,234,445',
      description: 'Maison à vendre | 8 chambres | 300 m2',
      address: 'Rabat agdal',
      author: 'Agdal agency',
      timePosted: '3 days ago'
    },
    {
      url: image4,
      price: '1,234,445',
      description: 'Maison à vendre | 8 chambres | 300 m2',
      address: 'Rabat agdal',
      author: 'Agdal agency',
      timePosted: '3 days ago'
    },

  ]

  return ( 
    <div className={classes.container}>
      <NavBar />
      <div className={classes.contentContainer}>
        <div className={classes.contentLeft}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom} />
        </div>
        <div className={classes.contentRight}>
          <div className={classes.titleContainer}>
            <div className={classes.title}>Immoubilier et maisons partout au maroc</div>
            <div className={classes.filterContainer}>
              <div className={classes.agentsNumber}>500 agents listings</div>
              <div className={classes.filtrerpar}><div>{'Filrer par : '}</div><div className={classes.filter}><div>Date - du plus récent au plus ancien</div><ArrowDropDown/></div></div>
            </div>
          </div>
          <div className={classes.cardsContainer}>
            {
              cards.map((card, index) => (
                <div className={classes.card} key={index}>
                  <img className={classes.image} src={card.url} alt="Card"></img>
                  <div className={classes.cardContent}>
                    <div className={classes.timePosted}> </div>
                    <div className={classes.price}>{card.price}</div>
                    <div className={classes.description}>{card.description}</div>
                    <div className={classes.address}>{card.address}</div>
                    <div className={classes.author}>{'Annoncé par : '}{card.author}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
