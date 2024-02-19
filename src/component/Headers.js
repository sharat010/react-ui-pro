import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { LocalLibrary, ShoppingCartCheckout } from "@mui/icons-material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { Style } from "../component/Header/style"; 

const Headers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ background: "#63970" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{display:{xs:'none',md:'flex'}}}
          >
            <LocalLibrary />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{flexGrow:1,xs:'none',md:'flex'}}>
            WaveMint
          </Typography>
          <Box my={4} sx={{display:{xs:'none',md:'flex'}}}>
            <Button
            color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Explore
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Button color="inherit">Drops</Button>
          </Box>
          <Box my={4} sx={{display:{xs:'none',md:''}}}>
         <IconButton size='large' edge='start' color="inherit">
          <MenuIcon/>
         </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Headers;
