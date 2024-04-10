import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuButton = ({ menu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={`${menu.name}-menu`}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {menu.name}
      </Button>
      <Menu
        id={`${menu.name}-menu`}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu.menuItems.map((item) => (
          <MenuItem onClick={item.onClick} href={item.href}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default MenuButton;