import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Icon from "@material-ui/core/Icon";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
  },
  list: {
    color: theme.palette.primary.main,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="persistent"
      open
    >
      <Toolbar />
      {/** Top 3  */}
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <HomeOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <WhatshotOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <SubscriptionsOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
      </List>
      {/** Main */}
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <FolderOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Library" color="primary" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <TheatersOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <AccessAlarmOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Watch later" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <StarOutlineOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <FavoriteBorderOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Liked videos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <MusicNoteOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>
              <SportsEsportsOutlinedIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Games" />
        </ListItem>
      </List>
      {/** Subscriptions */}
      <List className={classes.list}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Gussie Singleton" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Nora Francis" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Belle Briggs" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Eunice Cortez" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Emma Hansen" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Leah Berry" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
