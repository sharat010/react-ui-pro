import React from "react";
import Header from "../component/Header/Header";
import { Box, makeStyles } from "@material-ui/core";
import TabButtons from "./TabButtons";
import Slider from "./Slider";

const HomeCom = () => {
  const className = makeStyles();

  return (
    <Box>
      <Box className="container">
        <Header />
        <TabButtons/>
      </Box>
    </Box>
  );
};

export default HomeCom;
