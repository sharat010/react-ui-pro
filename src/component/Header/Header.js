import { AppBar, Box, Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { Stack } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from "../../logoimg.png";
// import style from '../Header/makeStyle';
const Header = () => {

  return (
    <Box>
      <Box className="header">
        <Box className="logo">
         {/* <AppBar component={'nav'}> */}
          {/* <Typography> */}
          <img src={logo} />
          <a href="/">WaveMint</a>
          {/* </Typography> */}
         {/* </AppBar> */}
        </Box>
       
        <Box class="list">
          <ul className="flex">
            <li>Explore</li>
            <li>Drops</li>
          </ul>
        </Box>
        <Box class="search">
          <span class="search">
            <SearchIcon />
          </span>
          <TextField type="text" placeholder="Search clubs,items,collection" />
        </Box>
        <Box>
          <Stack className="btn" spacing={2} direction="row">
            <Box className="button1">
            <Box className="btn-inner">
            
              <p> 0.7517</p>
            </Box>
            </Box>

            <Box className="button1">
            <Box className="btn-inner">
            <AccountCircleIcon className="icon" />
              <p> 0x73226e21178c0f</p>
            </Box>
            </Box>
            <Button className="btn border-img" variant="contained" size="large">
              Tokengate
            </Button>

          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
