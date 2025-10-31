import Toolbar from "@material-ui/core/Toolbar";
import React, { Component, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { transition2d, backgroundTransition } from "react-hover-css";
import zIndex from "@material-ui/core/styles/zIndex";
import { AppBar, makeStyles, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    colorScheme: "#87c3d8f5",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // fontSize: "1.5rem",
    // fontWeight: "400",
    // lineHeight: "1.334",
    // letterSpacing: "0em",
    color: "#492F10", // style={{ background: "linear-gradient(#c4c720, #1cc478);" }}
    width: "240px",
    height: "41px",
    fontWeight: "600",
    // backgroundColor: "red",
    transitionDuration: "0.4s",
    fontSize: "1.5rem",

    "&:hover": { color: "#BB8760", transitionDuration: "0.4s" },
  },
  selectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const openMobileMenu = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };
  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={closeMobileMenu} component={Link} to="/dashboardstd">
        Student
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={Link} to="/dashboardclass">
        Class Response
      </MenuItem>
      <MenuItem
        onClick={closeMobileMenu}
        component={Link}
        to="/dashboardhygine"
      >
        Hygiene Run
      </MenuItem>
      <MenuItem
        onClick={closeMobileMenu}
        component={Link}
        to="/dashboardpuzzle"
      >
        Reproductive Puzzle
      </MenuItem>
      <MenuItem
        onClick={closeMobileMenu}
        component={Link}
        to="/dashboardsnakes"
      >
        Stairs And Slides
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "#f3d5b5",
          width: "100%",
          height: "100%",
          borderRadius: "500px",
          marginTop: "10",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#000"
            aria-label="menu"
            onClick={openMobileMenu}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignSelf: "center", width: "180px" }}>
            <div className={classes.selectionDesktop}>
              <Link
                to="/dashboardstd"
                style={{ textDecoration: "none", gap: "1.5rem" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Individual Student
                </Typography>
              </Link>

              <Link
                to="/dashboardclass"
                style={{ textDecoration: "none", gap: "1.5rem" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Class Response
                </Typography>
              </Link>
              <Link to="/dashboardhygine" style={{ textDecoration: "none" }}>
                <Typography variant="h6" className={classes.title}>
                  Hygiene Run
                </Typography>
              </Link>
              <Link to="/dashboardpuzzle" style={{ textDecoration: "none" }}>
                <Typography variant="h6" className={classes.title}>
                  Reproductive Puzzle
                </Typography>
              </Link>
              <Link
                to="/dashboardsnakes"
                style={{ textDecoration: "none", gap: "2.5rem" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Stairs {`&`} Slides
                </Typography>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </div>
  );
}
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
