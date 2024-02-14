// styles.js
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  nav:{
display:"flex",
width:"100%"
  },
  navLogo:{
width:"60%",
  },
  navMenu:{
    width:"40%"
  },
  outerButton: {
    border: '2px solid',
    borderImage: 'linear-gradient(45deg, #FF2E93 30%, #536DFE 90%)',
    borderImageSlice: 1,
    backgroundColor: 'transparent',
    color: 'white',
    padding: '10px 20px', 
    cursor: 'pointer',
    borderRadius: '6px', // Add border-radius
  },
  fullWidthButton:{
    backgroundImage: 'linear-gradient(45deg, #FF2E93 30%, #536DFE 90%)',
    borderImage: 'linear-gradient(45deg, #FF2E93 30%, #536DFE 90%)',
  },
  parentButton: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: 'red',
    color: 'white',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: 'info',
    },
  },
  childButton: {
    borderRadius: '4px',
    backgroundColor: 'red',
    color: 'white',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  slider: {
    width: '80%',
    marginBottom: theme.spacing(2),
  },
  slide: {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childButton:{
    backgroundColor:"red"
  },swiper: {
    width: '100%',
    height: '100%',
  },
  swiperSlide: {
    textAlign: 'center',
    fontSize: 18,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  
}));

