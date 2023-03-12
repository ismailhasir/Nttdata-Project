/* eslint-disable import/no-anonymous-default-export */
import { Box, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuExpand from "./MenuExpand";


export default () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [navItems, setMenuItems] = useState({
    menuItems: Array.from({ length: 10 }, (value, index) => ({
      label: 'Menu Item',
      id: index,
      subMenu: [
        { label: 'sub menu' },
      ]
    })),
    currentItems:Array.from({ length: 10 }, (value, index) => ({
      label: 'Menu Item',
      id: index,
      subMenu: [
        { label: 'sub menu' },
      ]
    })),
    navItems:[]
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setSelectedItem(null);
    setAnchorEl(null);
  };

  window.addEventListener('resize', (event) => {
    if (event?.currentTarget?.innerWidth < 900 && event?.currentTarget?.innerWidth > 600 && navItems?.navItems?.length === 0) return setMenuItems((prev) => ({...prev,
      currentItems: prev.menuItems.slice(0, -4), navItems: prev.currentItems.slice(2, -1)
    }))
    else if (event.currentTarget.innerWidth < 600 && navItems.navItems?.length<3) return setMenuItems((prev) => ({...prev,
      currentItems: prev.menuItems.slice(0, 2), navItems:prev.menuItems.slice(-6, -1)
    }))
    else if (event?.currentTarget?.innerWidth > 900 && event?.currentTarget?.innerWidth < 1100) return setMenuItems((prev) => ({...prev,
      currentItems: prev?.menuItems
    }))
  })
  useEffect(() => {
    if (window.innerWidth < 900 && window.innerWidth > 600 && navItems?.navItems?.length === 0) return setMenuItems((prev) => ({...prev,
      currentItems: prev?.menuItems.slice(0, -4), navItems: prev?.currentItems.slice(2, -1)
    }))
    else if (window.innerWidth < 600 && navItems.navItems &&  navItems?.navItems?.length<3) return setMenuItems((prev) => ({
      ...prev, currentItems: prev?.menuItems.slice(0, 2), navItems: prev?.menuItems.slice(-6, -1)
    }))
    
  },[])
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
      }}>
        {
          navItems.currentItems.map((item) => (
            <MenuItem
              key={item.id}
              sx={{
                flexGrow: 1,
                visibility: '',
                borderBottom: (theme) => selectedItem?.id === item.id ? `1px solid ${theme.palette.primary.main}` : 'unset'
              }}
              onClick={(e) => {
                handleClick(e);
                setSelectedItem(item);
              }}
            >
              <Typography variant="body1">{item.label}</Typography>
            </MenuItem>
          ))
        }
      </Box>
      {
        open && (
          <MenuExpand
            anchorEl={anchorEl}
            handleClose={handleClose}
            open={open}
          />
        )
      }
    </>
  )

};
