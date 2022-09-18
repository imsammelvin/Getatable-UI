import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import PostForm from "../../components/common/PostForm";

export default function BottomNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <BottomNavigation
          sx={{
            bgcolor: "#d1c7e1",
            color: "#a1a0ad",
            position: "fixed",
            zIndex: 100,
            width: "100%",
            bottom: 0,
            marginLeft: "-8px",
            marginRight: "-8px"
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Store"
            value="store"
            icon={<ShoppingBagIcon />}
          />
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              bottom: 50,
              width: "68px",
              height: "64px",
              margin: -1
            }}
          >
            <AddIcon
              onClick={handleOpen}
              sx={{
                fontSize: "38px"
              }}
            />
          </Fab>
          <BottomNavigationAction
            label="Like"
            value="like"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Forum"
            value="forum"
            icon={<HandshakeIcon />}
          />
        </BottomNavigation>
      </div>
      <div>
        <PostForm open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}
