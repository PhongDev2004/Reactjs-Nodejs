import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from 'src/context/UserContext';
import toast from 'react-hot-toast';
import { logoutUser } from 'src/service/auth';
import { useCart } from 'src/context/CartContext';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Blog', to: 'post' },
  { name: 'Team', to: 'team' },
  { name: 'Features', to: 'features' },
];

function Header() {
  const { setUser, isLoggedIn, setIsLoggedIn } = useUser();
  const { quantity } = useCart();
  const naviage = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    await logoutUser();
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUser(null);
    setIsLoggedIn(false);
    // naviage('/');
    toast.success('Logout successfully!');
  };
  const settings = [
    { name: 'Profile', to: '/profile' },
    { name: 'Account', to: '/account' },
    { name: 'Logout', action: handleLogout },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="./logo.png" className='w-10 mr-1' alt="" />
            <Link to="/">
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: '#000',
                  textDecoration: 'none',
                  margin: 0
                }}
              >
                Furniro
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{ color: '#000' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color='#000'>
                    <Link to={page.to}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#000',
              textDecoration: 'none',
            }}
          >
            Furniro
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 8, fontFamily: 'monospace' }}>
            {pages.map((page, index) => (
              <Typography key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#000', fontWeight: 700, display: 'block' }}>
                <Link to={page.to}>{page.name}</Link>
              </Typography>
            ))}
          </Box>


          {isLoggedIn ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Box sx={{ display: 'flex', gap: 4 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <PersonIcon sx={{ color: '#000' }} />
                    </IconButton>
                  </Tooltip>
                  <Link to="/">
                    <SearchIcon sx={{ color: '#000' }} />
                  </Link>
                  <Link to="/">
                    <FavoriteBorderIcon sx={{ color: '#000' }} />
                  </Link>
                  <Link to="/cart">
                    <Badge badgeContent={quantity} color="error">
                      <ShoppingCartIcon sx={{ color: '#000' }} />
                    </Badge>
                  </Link>
                </Box>
                <Menu
                  sx={{ mt: '30px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.to ? <Link to={setting.to}>{setting.name}</Link> : <button onClick={setting.action}>{setting.name}</button>}</Typography>
                    </MenuItem>
                  ))}
                  { }
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box>
                <Link style={{ color: '#B88E2F' }} to="/register" className="btn border-solid border me-1 bg-white text-sky-600 py-1 px-4 rounded-sm font-medium">
                  Register
                </Link>
                <Link to="/login" className="btn border-solid border-2 box-border text-white py-1 px-4 rounded-sm font-medium bg-[#B88E2F]">
                  Login
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
