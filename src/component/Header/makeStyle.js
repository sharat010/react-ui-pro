import { style } from "@mui/system";

export const Style = style((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  logo: {
    "& img": {
      width: "100%",
      height: "60px",
      marginTop: "4px",
    },
  },
  container: {
    width: "97%",
  margin: "auto",
  },
  header: {
    display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  },
  search: {
    position: "relative",
  Color: "#aaa",
  fontSize: "16px",
  },
  flex: {
    display: "flex",
  },
  search : {
    "& input":{
    width: "580px",
  height: "35px",
  border: "1px solid #aaa",
  borderRadius: "10px",
  margin: "10px 0px",
  border: "1px solid #dacfcf"},
  },
  search: {
    "& input":{
      textIndent: "42px",

  },},
  btn: {
    padding: "8px 20px",
    // Add border-image styling
  },
  borderImg: {
    border: "3px solid transparent",
    borderRadius: "25px",
    borderImage: "url(border.jpeg) 2 round",
  },
  borderImgBackground: {
    backgroundImage: "url('../src/download.jpeg')",
    backgroundPosition: "42% 43%",
    borderRadius: "10px !important",
  },
  list: {
    "& li": {
      listStyle: "none",
      padding: "10px 20px",
      fontSize: "20px",
      color: "black",
      fontWeight: 600,
    },
  },
  tab: {
    backgroundColor: "#aaa",
    width: "150px",
    marginBottom: "10px",
  },
  gradient: {
    backgroundColor: "red",
    padding: "5px 10px",
    margin: "2px",
    borderRadius: "5px",
    border: "none",
  },
  all: {
    padding: "0px 20px",
  },
  searchLeft: {
    left: "10px",
    right: "auto",
  },
  carouselItem: {
    padding: "15px",
    cursor: "-webkit-grabbing",
  },
  image: {
    borderRadius: "30px",
    height: "500px",
    transition: "0.25s linear",
  },
  carouselIndicators: {
    "& li": {
      display: "inline-block",
      width: "10px",
      height: "10px",
      margin: "1px",
      textIndent: "-999px",
      cursor: "pointer",
      //   backgroundColor: "#000 \9",
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1px solid #fff",
      borderRadius: "10px",
      margin: "2px",
      position: "relative",
      top: "30px",
    },
  },
  carouselControlPrev: {
    left: "-50px",
    margin: "0 -25px",
  },
  carouselControlNext: {
    right: "-50px",
    margin: "0 -25px",
  },
}));
