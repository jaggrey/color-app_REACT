import sizes from './sizes';
import bg from './bg.svg';


export default {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#0812d1",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  heading: {
    fontSize: "1.7rem"
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      textDecoration: "none",
      color: "white",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    [sizes.down("xs")]: {
      width: "110%",
      marginLeft: "-1rem"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: "1.5rem"
    }
  }
}