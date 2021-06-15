import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import Thumbnail from "../Thumbnail/Thumbnail";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2, 3),
    marginLeft: drawerWidth,
    background: theme.palette.background.paper,
  },
  userSelections: {
    display: "flex",
    alignItems: "center",
    "&:not(:first-of-type)": {
      marginTop: "2em",
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  userName: {
    fontWeight: 600,
  },
  thumbnails: {
    display: "flex",
    overflow: "scroll",
  },
}));

const HomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.userSelections}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>
        <Typography className={classes.userName} variant="h6" component="h2">
          Dollie Blair
        </Typography>
      </div>
      <div className={classes.thumbnails}>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>

      <div className={classes.userSelections}>
        <Typography className={classes.userName} variant="h6" component="h2">
          Recommended
        </Typography>
      </div>
      <div className={classes.thumbnails}>
        <Thumbnail size="large" />
        <Thumbnail size="large" />
        <Thumbnail size="large" />
      </div>

      <div className={classes.userSelections}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>
        <Typography className={classes.userName} variant="h6" component="h2">
          Food & Drink
        </Typography>
      </div>
      <div className={classes.thumbnails}>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </div>
  );
};

export default HomeContent;
