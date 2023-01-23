import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';

function MenuListItem({ Icon, title, to, path }) {
  return (
    <MenuItem title={title} component={RouterLink} to={path}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </MenuItem>
  );
}

function RenderMobileMenu() {
  return (
    <>
      <Divider />
      <MenuListItem Icon={DashboardIcon} title="Inicio" path="/" />
      <MenuListItem Icon={GroupIcon} title="Peliculas" path="/movies" />
      <MenuListItem Icon={MailIcon} title="Generos" path="/genres" />
      <Divider />
      <Button
        variant="contained"
        size="small"
        fullWidth
        disableElevation
        component={RouterLink}
        to="/login"
        sx={{ mb: 1 }}
      >
        Iniciar Sesión
      </Button>
      <Button
        variant="outlined"
        size="small"
        fullWidth
        component={RouterLink}
        to="/login"
      >
        Registrarse
      </Button>
    </>
  );
}
function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const handleMobileMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: {
          xs: 'inline-flex',
          sm: 'inline-flex',
          md: 'inline-flex',
          lg: 'none',
        },
      }}
    >
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={handleMobileMenuClose}
        onClick={handleMobileMenuClose}
        PaperProps={{
          sx: {
            overflow: 'visible',
            borderTop: 4,
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: -2,
              left: 18,
              width: 15,
              height: 15,
              bgcolor: 'transparent',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <RenderMobileMenu />
      </Menu>
      <IconButton
        edge="end"
        color="primary"
        onClick={handleMobileMenuOpen}
        size="large"
      >
        <MenuIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export default MobileMenu;
