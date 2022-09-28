import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";


const drawerWidth = 240;

// styled(Component, [options])(styles) => Component
// options.shouldForwardProp ((prop: string) => bool [optional]): Indicates whether the prop should be forwarded to the Component

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && { marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)` }),
    })
);

export default function AppHeader({ open, toggleMenu }) {
    
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleMenu}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    РІОЦ-3
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
