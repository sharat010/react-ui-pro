import React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Link from "@mui/material/Link";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Stack, style } from "@mui/system";
import logo from "../../images/logoimg.png";
import { CustomBox } from "./style";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
const Header = () => {
  const anchorPoints = ["left"];

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <Box className="menu-btn" mx={{ xs: 2, md: 4 }}>
      <Box className="logo">
        <img src={logo} alt="WaveMint Logo" />
        <Link href="/">WaveMint</Link>
      </Box>
      <Box sx={{ margin: "30px" }}>
        <Box className="button1">
          <Box className="btn-inner">
            <Typography> 0.7517</Typography>
          </Box>
        </Box>
        <Box className="button1">
          <Box className="btn-inner">
            <AccountCircleIcon className="icon" />
            <Typography> 0x73226e21178c0f</Typography>
          </Box>
        </Box>
        <Box className="button1">
          <Button className="btn border-img " variant="contained" size="large">
            Tokengate
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box className="header">
        <Box className="menu">
          {anchorPoints.map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
        <Box className="logo">
          <img src={logo} alt="WaveMint Logo" />
          <a href="/">WaveMint</a>
        </Box>

        <Box my={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            margin="10px"
            color="inherit"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <b>Explore</b>
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
        </Box>
        <Box class="list">
          <ul className="flex">
            <li>Drops</li>
          </ul>
        </Box>
        <Box class="search">
          <span class="search">
            <SearchIcon />
          </span>
          <TextField
            size="medium"
            variant="outlined"
            fullWidth
            placeholder="Search clubs, items, collection"
          />
        </Box>
        <Box className="user">
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
            <Button
              className="btn border-img button1"
              variant="contained"
              size="large"
            >
              <b>Tokengate</b>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
