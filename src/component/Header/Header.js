import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import { Stack } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

import logo from "../../logo.png";
const Header = () => {
  const className = makeStyles();

  return (
    <Box>
      <Box className="header">
        <Box className="logo">
          <img src={logo} />
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
            <Button
              className="btn"
              id="borderimg"
              variant="outlined"
              size="large"
            >
              0.7517
            </Button>
            <Button
              className="btn"
              id="borderimg"
              variant="outlined"
              size="large"
              startIcon={<DeleteIcon />}
            >
              0x73226e21178c0f
            </Button>
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
