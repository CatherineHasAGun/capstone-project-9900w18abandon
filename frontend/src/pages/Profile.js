import React from "react";
import { Box, Button, Avatar, Chip } from "@mui/material";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [widthMin, setWidthMin] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // const user1 = {
  //   userName : 'Xuhua Zhang',
  //   Email: '456@gmail.com',
  //   Status: 'Academic',
  //   Department: '-',
  //   Program: '-',
  //   Follower: ['aa'],
  //   skills: {
  //     'programming language' : ['C++', 'Java']
  //   }
  // }
  // if (!localStorage.getItem('user1')) {
  //   localStorage.setItem('user1', JSON.stringify(user1))
  // }
  const user1 = {
    userName : 'Xuhua Zhang',
    Email: '456@gmail.com',
    Status: 'Academic',
    Department: '-',
    Program: '-',
    Follower: ['aa'],
    skills: {
      'programming language' : ['C++', 'Java']
    }
  }
  if (!localStorage.getItem('user1')) {
    localStorage.setItem('user1', JSON.stringify(user1))
  }

  const token = 'user1';
  const userProfile = JSON.parse(localStorage.getItem(token))

  const generalStyle = {
    display: 'flex',
    flexDirection: widthMin ? 'column': 'row', 
    width: '100%',
  }

  const borderStyle = {
    border: '1px solid #C5C5C5',
    boxShadow: '-6px 6px 17px 0px #00000040'
  }

  const titleStyle = {
    width: '40%',
    padding: '8px',
    marginLeft: '18px',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '1px solid #C5C5C5',
  }
  const contentStyle = {
    width: '60%',
    padding: '8px',
    marginRight: '18px',
    textAlign: 'left',
    fontSize: '18px',
    borderBottom: '1px solid #C5C5C5',
  }

  React.useEffect(() => {
    const responsive = (e) => {
      e.preventDefault();
      const width = document.body.clientWidth;
      if (width <= 900) {
        setWidthMin(true);
      } else {
        setWidthMin(false);
      }
    }
    window.addEventListener('resize', responsive);
    return () => {
      window.removeEventListener('resize', responsive);
    }
  }, [])

  const clickEditProfile = () => {setOpen(true)}

  return (
    <div>
      <EditProfile open={open} setOpen={setOpen} data={userProfile} token={token}/>
      <Box sx={{ m: 2 }}>
        <Box sx={generalStyle}>
          <Box sx={{...borderStyle, 
            width: widthMin ? '90vw': '30%', 
            minWidth: 300, 
            mb: 1, 
            mx:  widthMin ? 'auto' : 2, 
            ml: 0, 
            position: 'relative',
            textAlign: 'center'}}>
            <Avatar sx={{ width: 145, height: 145, m: '8px auto' }} />
            <Chip color="primary" label='Click to Upload Image' sx={{mb: 1 }}/>
            <Box sx={{ backgroundColor: 'rgb(245, 248, 250)', py: 2, textAlign: 'center'}}>
              {userProfile['Follower'].length} Followers
            </Box>
          </Box>
          <Box sx={{...borderStyle, mb: 1 , width: widthMin ? '90vw': '70%' }}>
            <Box 
              sx={{display:'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                backgroundColor: 'rgb(255, 221, 0)'}}>
              <h3 style={{padding: '10px 20px'}}>Profile</h3>
              <Button variant="contained" color="info" sx={{m: '4px'}}
              onClick={clickEditProfile}
              >
                Edit Profile</Button>
            </Box>
            <table style={{width: '100%', padding: '0 20px'}}>
              <tbody style={{width: '100%'}}>
                <tr>
                  <th style={titleStyle}>Username</th>
                  <td style={contentStyle}>{userProfile.userName}</td>
                </tr>
                <tr>
                  <th style={titleStyle}>Email</th>
                  <td style={contentStyle}>{userProfile.Email}</td>
                </tr>
                <tr>
                  <th style={titleStyle}>Status</th>
                  <td style={contentStyle}>{userProfile.Status}
                  {userProfile.Status === 'Student' && <Chip label="Academic Promotion" sx={{mx:2}} size="small"/>}
                  </td>
                </tr>
                <tr>
                  <th style={titleStyle}>Department</th>
                  <td style={contentStyle}>{userProfile.Department}</td>
                </tr>
                <tr>
                  <th style={titleStyle}>Program</th>
                  <td style={contentStyle}>{userProfile.Program}</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>
        <Box sx={{...borderStyle, width: '100%', mt: 1 }}>   
          <h3 style={{ padding: '10px', textAlign: 'center', backgroundColor: 'rgb(255, 221, 0)' }}>Skills</h3>
          <Box sx={{ py: 2, px: 4}}>
            {Object.entries(userProfile.skills).map((value, index) => {
              return (
                <Box sx={{my: 1 }} key={index}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{value[0]} : </span>
                {Object.entries(value[1]).map((value, index) => {
                  return(
                    <span key={index} style={{marginLeft: '8px'}}>{value[1]}</span>
                  )
            })}
                </Box>
              )
            })}
              
            <Chip color="primary" label='Add More Skills' sx={{my: 1 }}/>
          </Box>
        </Box>
      </Box> 
        {/* <Box sx={{ m: 1}}>
        <Tooltip title='To Dashboard'>
          <Link to='/dashboard' style={linkStyle}>Dashboard</Link>
        </Tooltip>
         / 
        <Tooltip title='To Profile'>
          <Link to='/profile' style={linkStyle}>Profile</Link>
        </Tooltip>
         / Edit
    </Box> */}
    </div>
  )
}

export default Profile;