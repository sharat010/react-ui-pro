import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Header = () => {
  return (
    <>
      <div className='wrapper'>
       <div className='container'>
       <div className='navbar'>
          <div className='logo-sec'>
            <Link to='/'>WaveMint</Link>
          </div>
          <div className='menu-sec'>
            <ul>
              <li>Explore</li>
              <li>Drop</li>
            </ul>
          </div>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
            <input type='text' className='search-bar' placeholder=' Search Clubs,items,collection' />          
            <Search>
            <SearchIconWrapper >
              <SearchIcon  />
            </SearchIconWrapper>
            {/* <StyledInputBase
            className='search-bar'
              placeholder="Search clubs,items,collection"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
          </Search>
            </Grid>
            
          </Grid>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          
        </div>
       </div>
      </div>
    </>
  )
}

export default Header
