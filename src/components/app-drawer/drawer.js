import MuiDrawer from "@mui/material/Drawer";
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DrawerMenu } from "./drawer-menu";

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import StorageIcon from '@mui/icons-material/Storage';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const handleClick = (e) => {
  console.log(e.target);
}

export default function AppDrawer({ open, toggleMenu }) {
  const theme = useTheme();



  return (
    <Drawer variant="permanent" open={open}>
      3
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          //   padding: "0 1",
          minHeight: "63px",
        }}
      >
        <IconButton onClick={toggleMenu}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      <Divider variant="middle" />

      <DrawerMenu
        open={open}
        menu={["Головна", "IP адреси",]}
        buttons={[<HomeIcon />, <StorageIcon/>]}
        onClick={handleClick}
      />

      <Divider variant="middle" />

      <DrawerMenu
        open={open}
        menu={["Профіль", "Вихід",]}
        buttons={[<AccountBoxIcon/>, <LogoutIcon/>]}
        onClick={handleClick}
      />

    </Drawer>
  );
}
