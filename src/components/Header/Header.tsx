import React from "react";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import YoutubeLogo from "../../images/youtube-logo.svg";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <ToolBar className={classes.toolBar} disableGutters>
        <div className={classes.toolBarLeft}>
          <IconButton className={classes.menuBtn} aria-label="open side drawer">
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={YoutubeLogo} alt="Youtube logo" />
        </div>
        <div className={classes.search}>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "Youtube search",
            }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <div className={classes.grow} />
        <div>
          <IconButton aria-label="make video call" color="primary">
            <VideoCallOutlinedIcon />
          </IconButton>
          <IconButton aria-label="open more apps" color="primary">
            <AppsIcon />
          </IconButton>
          <IconButton aria-label="show notifications" color="primary">
            <NotificationsOutlinedIcon />
          </IconButton>
        </div>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
