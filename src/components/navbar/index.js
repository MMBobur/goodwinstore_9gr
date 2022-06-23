import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from './../../assets/logo.png'
import Icon from './../../assets/shopIcon.png'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const pages = ['Layouts', 'SHop buy', 'Clothng', 'Footwer', 'Sale', 'Buy Theme'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const dropdown = [
  <Box>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            LAYOUTS
          </Button>
          <Menu {...bindMenu(popupState)} sx={{ marginLeft: '8.5%', marginTop: '-2.5%' }}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  </Box>
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <AppBar position="static">
      <Box sx={{ bgcolor: '#9AC3E1', height: '10vh' }}>
        <Stack direction="row" justifyContent='center' spacing={2} sx={{ bgcolor: '#9AC3E1', display: 'flex', gap: '5vh', paddingTop: '2vh' }}>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>eng</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>usd</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none', fontSize: '12px' }}> STANDARD DELIVERY ON ORDERS OVER $ 150</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>8 800 265 86 56</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>Search</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>Wishlist</Item>
          <Item sx={{ bgcolor: '#9AC3E1', color: 'white', boxShadow: 'none' }}>My account</Item>
        </Stack>
      </Box>
      <Container maxWidth="xl" sx={{ height: '12vh', bgcolor: 'white', justifyContent: 'center', textAlign: 'center' }}>
        <Toolbar disableGutters>
          <Typography> <img src={Logo} /></Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button sx={{ color: 'black' }} {...bindTrigger(popupState)}>
                      LAYOUTS
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button sx={{ color: 'black' }} {...bindTrigger(popupState)}>
                              LAYOUTS
                            </Button>
                            <Menu {...bindMenu(popupState)} sx={{ marginLeft: '6.5%', marginTop: '-2.5%' }}>
                              <MenuItem onClick={popupState.close}>Profile</MenuItem>
                              <MenuItem onClick={popupState.close}>My account</MenuItem>
                              <MenuItem onClick={popupState.close}>Logout</MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState><br />
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button sx={{ color: 'black' }} {...bindTrigger(popupState)}>
                              LAYOUTS
                            </Button>
                            <Menu {...bindMenu(popupState)} sx={{ marginLeft: '6.5%', marginTop: '-2.5%' }}>
                              <MenuItem onClick={popupState.close}>Profile</MenuItem>
                              <MenuItem onClick={popupState.close}>My account</MenuItem>
                              <MenuItem onClick={popupState.close}>Logout</MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                      <MenuItem onClick={popupState.close}></MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button sx={{ color: 'black' }} {...bindTrigger(popupState)}>
                      SHOP BY
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button sx={{ color: 'black' }} {...bindTrigger(popupState)}>
                      CLOTHING
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Button>
            <Button sx={{color:'black'}}>FOOTWEAR</Button>
            <Button sx={{color:'black'}}>SALE</Button>
            <Button sx={{color:'black'}} >BUY THEME <span style={{color:'red'}} >-20%</span></Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography><img style={{ fontSize: '5000px' }} src={Icon} /></Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
