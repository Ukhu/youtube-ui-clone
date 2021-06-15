import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1300,
  },
  toolBar: {
    background: theme.palette.background.paper,
  },
  toolBarLeft: {
    display: "flex",
    alignItems: "center",
    width: 240,
  },
  menuBtn: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginRight: theme.spacing(3),
  },
  grow: {
    flexGrow: 2,
  },
  search: {
    display: "flex",
    flexGrow: 3,
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: "1.2em",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputRoot: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
  },
  inputInput: {
    padding: theme.spacing(1, 2),
  },
}));

export default useStyles;
