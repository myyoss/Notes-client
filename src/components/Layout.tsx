import { List, makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  AddCircleOutline,
  Padding,
  SubjectOutlined,
} from "@mui/icons-material";
import { Link, useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";

const drawerWidthSize = () => {};

const drawerWidth = 180;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
      color: "#9c27b0",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
      color: "#4e2555",
      padding: 6,
      paddingLeft: 40,
      background: "#fff",
      marginRight: 36,
      borderRadius: 6,
    },
    avatar: {
      marginLeft: theme.spacing(3),
    },
    avatarName: {
      // color: blue[500],
      color: "#9c27b0",
      fontWeight: 900,
      fontSize: 18,
    },
    span: {
      color: "grey",
      // color: 'lightblue'
    },
  };
});

const Layout = ({ children }: any) => {
  const classes: any = useStyles();
  const history = useHistory();
  const location = useLocation();

  const MenuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
    {
      text: "Gallery",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
    {
      text: "News",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
    {
      text: "Mail Box",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];

  const mobileMenuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },

  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography className={classes.avatarName}>Jesy</Typography>
          <Avatar
            className={classes.avatar}
            src="	http://localhost:3000/avatar.JPG"
          />
        </Toolbar>
        <List className="mobileView">
          {mobileMenuItems.map((item: any, i: any) => (
            <ListItem
              button
              key={i}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Jesy's Notes
          </Typography>
        </div>
        <List>
          {MenuItems.map((item: any, i: any) => (
            <ListItem
              button
              key={i}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
