import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export function SidebarMenu({menu, buttons, open, onClick }) {

    function click(event) {
      console.log(event.currentTarget);
    }

    return (
      <List>
        {menu.map((itemCaption, index) => (
            
          <ListItem 
            key={itemCaption} 
            disablePadding 
            sx={{ display: "block" }} 
            onClick={(event) => click(event)}>
            
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",                  
                }}
              >
                {buttons[index]}
              </ListItemIcon>

              <ListItemText 
                primary={itemCaption} 
                sx={{ opacity: open ? 1 : 0 }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }