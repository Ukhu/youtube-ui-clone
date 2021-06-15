import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const thumbnailWidth = {
  small: 250,
  large: 540,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    marginRight: "2em",
    boxShadow: "none",
    flexShrink: 0,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.primary.main,
  },
  metaViews: {
    marginRight: "1em",
  },
  image: {
    width: ({ size }: IThumbnailProps) =>
      size ? thumbnailWidth[size] : thumbnailWidth.small,
    height: ({ size }: IThumbnailProps) => (size === "large" ? 250 : 150),
    borderRadius: "8px",
  },
  content: {
    padding: 0,
    paddingTop: "1em",
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

interface IThumbnailProps {
  size?: "small" | "large";
}

const Thumbnail = (props: IThumbnailProps) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        image="/static/images/thumbnail.png"
        title="Thumbnail"
      />
      <CardContent classes={{ root: classes.content }}>
        <Typography className={classes.title} variant="body2">
          A Brief History Of Creation
        </Typography>
        <div className={classes.meta}>
          <div>
            <Typography className={classes.metaViews} variant="caption">
              80k views
            </Typography>
            <Typography variant="caption">3 days ago</Typography>
          </div>
          <Typography variant="caption">Dollie Blair</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Thumbnail;
