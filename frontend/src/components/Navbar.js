import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Tooltip, List, ListItemButton, Drawer, AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../logo.png'

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';


const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [widthMin, setWidthMin] = React.useState(false);
  const [focusedLink, setFocusedLink] = React.useState(null);
  const location = useLocation();
  const page = location.pathname.split('/')[1];

  const handleFocus = (link) => {
    setFocusedLink(link);
  };

  const handleBlur = () => {
    setFocusedLink(null);
  };

  const linkStyle = {
    margin: 'auto 8px',
    width: '20%',
    minWidth: '120px',
    maxWidth: '200px',
    height: '40px',
    border: '1px solid white', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'black',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '20px',
    outline: 'none'
  }

  const getLinkStyle = (link) => {
    if (focusedLink === link) {
      return { ...linkStyle, backgroundColor: '#C5C5C5' }; 
    }
    return { ...linkStyle, backgroundColor: '#F5F5F5' };
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(page);
  const clickDashboard = () => { navigate('/dashboard'); }
  const clickCourses = () => { navigate('/courses'); }
  const clickProjects = () => { navigate('/projects'); }
  const clickJobs = () => { navigate('/jobs'); }
  const clickProfile = () => { navigate('/profile'); }
  const clickLogout = () => { navigate('/'); }

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {setOpen(newOpen);};

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{mt: 2, mx: 2}}>
        <ListItemButton 
          onClick={clickDashboard}
          sx={{backgroundColor: page==='dashboard' ? '#C5C5C5' : 'white' }} >
          <DashboardIcon sx={{mr: 1}}/>Dashboard
        </ListItemButton>
        <ListItemButton 
          onClick={clickCourses}
          sx={{backgroundColor: page==='courses' ? '#C5C5C5' : 'white' }}>
          <MenuBookIcon sx={{mr: 1}}/>Course
        </ListItemButton>
        <ListItemButton 
          onClick={clickProjects}
          sx={{backgroundColor: page==='projects' ? '#C5C5C5' : 'white' }}>
          <DescriptionIcon sx={{mr: 1}}/>Project
        </ListItemButton>
        <ListItemButton 
          onClick={clickJobs}
          sx={{backgroundColor: page==='jobs' ? '#C5C5C5' : 'white' }}>
          <WorkIcon sx={{mr: 1}}/>Job
        </ListItemButton>
      </List>
    </Box>
  );

  React.useEffect(() => {
    const responsive = (e) => {
      e.preventDefault();
      const width = document.body.clientWidth;
      if (width <= 800) {
        setWidthMin(true);
      } else {
        setWidthMin(false);
        toggleDrawer(false)
      }
    }
    window.addEventListener('resize', responsive);
    return () => {
      window.removeEventListener('resize', responsive);
    }
  }, [])


  return (
    <AppBar
      position="static"
      sx={{ 
        backgroundColor: 'black', 
        height: '72px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        px: 2 }} >
      <IconButton onClick={toggleDrawer(true)} color="inherit" 
        sx={{ ml: 2, display: widthMin ? 'block' : 'none' }}>
        <MenuIcon />
      </IconButton>
      <img src={logo} alt='logo' style={{ margin: '2px 16px' }}/>
      <div 
        style={{
          display: widthMin ? 'none' : 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '70%',
          margin: '0 20px',
        }}>
        <button onClick={clickDashboard}
          style={getLinkStyle('/dashboard')}
          onFocus={() => handleFocus('/dashboard')}
          onBlur={handleBlur}
          autoFocus={page==='dashboard'}>
          <DashboardIcon sx={{mr: 1}}/>
          <Typography textAlign="center">Dashboard</Typography>
        </button>
        <button onClick={clickCourses}
          style={getLinkStyle('/courses')}
          onFocus={() => handleFocus('/courses')}
          onBlur={handleBlur}
          autoFocus={page==='courses'}>
          <MenuBookIcon sx={{mr: 1}}/>
          <Typography textAlign="center">Course</Typography>
        </button>
        <button onClick={clickProjects}
          style={getLinkStyle('/projects')}
          onFocus={() => handleFocus('/projects')}
          onBlur={handleBlur}
          autoFocus={page==='projects'}>
          <DescriptionIcon sx={{mr: 1}}/>
          <Typography textAlign="center">Project</Typography>
        </button>
        <button onClick={clickJobs}
          style={getLinkStyle('/jobs')}
          onFocus={() => handleFocus('/jobs')}
          onBlur={handleBlur}
          autoFocus={page==='jobs'}>
          <WorkIcon sx={{mr: 1}}/>
          <Typography textAlign="center">Job</Typography>
        </button>
      </div>
      
      <div style={{ margin: 'auto 0'}}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleClick}> 
            <Avatar sx={{mx: 1}}/>
          </IconButton>
          </Tooltip>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        >
        <MenuItem onClick={clickProfile}>
          <AccountCircleIcon sx={{marginRight: '10px'}}/>
          Profile
        </MenuItem>
        <MenuItem onClick={clickLogout}>
          <Logout sx={{marginRight: '10px'}}/>
          Logout
        </MenuItem>
        </Menu> 
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>

  );
}
export default Navbar;
