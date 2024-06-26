import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import { Box, Modal, Button, TextField, Typography } from '@mui/material/';

const EditProfile = (props) => {
  // props: open, setOpen
  console.log(props.data)
  const [name, setName] = React.useState(props.data.userName);
  const [department, setDepartment] = React.useState(props.data.Department);
  const [program, setProgram] = React.useState(props.data.Program);
  const [apply, setApply] =  React.useState(false);
  // const [reason, setReason] =  React.useState('');
  // const navigate = useNavigate();
  const style = {
    width: '50%',
    minWidth: '400px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
    display: 'flex',
    flexDirection: 'column',
    m: 'auto',
    mt: '120px'
  };
  const clickPoromotion = () => {setApply(true)}
  const cancelPoromotion = () => {setApply(false)}
  const clickCancel = () => props.setOpen(false);
  // const checkName = () => {
  //   if (!name) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }

  // const clickYes = async () => {
  //   if (!name) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //     const token = localStorage.getItem('token');
  //     const data = store.store;
  //     let slidesIndex;
  //     if (props.index) {
  //       slidesIndex = props.index;
  //     } else {
  //       slidesIndex = Object.keys(data).length ? Math.max(...Object.keys(data)) + 1 : 0;
  //     }
  //     const currentDate = new Date();
  //     data[slidesIndex] = {
  //       title: name,
  //       description,
  //       createAt: currentDate,
  //       thumbNail: '',
  //       content: []
  //     };
  //     const newStore = {
  //       store: data,
  //     }
  //     setName('');
  //     setDescription('');
  //     await axios({
  //       url: 'http://localhost:5005/store',
  //       method: 'PUT',
  //       headers: {
  //         authorization: token,
  //       },
  //       data: newStore,
  //     }).then((res) => {
  //       props.setOpen(false);
  //       navigate('/dashboard')
  //     }).catch((err) => {
  //       setErrorModal(true);
  //       setErrorMsg(err);
  //     });
  //   }
  // }

  const clickSave = () => {
    props.setOpen(false);
    const newProfile = props.data;
    newProfile.userName = name;
    newProfile.Department = department;
    newProfile.Program = program;
    localStorage.setItem(props.token, JSON.stringify(newProfile))
  }

  return (
    <div>
      <Modal
        open={props.open}
        sx= {{
          '& > .MuiBackdrop-root': { backdropFilter: 'blur(2px)', },
          p: 2
        }}
        >
        <Box sx={style}>
          <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', my: '4px'}}>
            <Typography variant="h6" component="h6" sx={{m: 'auto'}}>
              Username
            </Typography>
            <TextField
              id='outlined-basic'
              size='small'
              sx={{ ml: 1, width: '74%', p: 1 }}
              value={name}
              onChange={ (e) => setName(e.target.value) }
            />
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <Typography variant="h6" component="h6" sx={{m: 'auto'}}>
              Email
            </Typography>
            <TextField
              size='small'
              sx={{ ml: 1, width: '74%', p: 1 }}
              value={props.data.Email}
              disabled
            />
          </Box>
          {/* <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', my: '4px'}}>
            <Typography variant="h6" component="h6" sx={{m: 'auto'}}>
              Status
            </Typography>
            <Box sx={{ width: '74%', display: 'flex', flexDirection: 'row', ml: 1}}>
              <TextField
                size='small'
                value='student'
                disabled
                sx={{width: '50%', p: 1}} />
              <Chip label="Academic Promotion" color="info" onClick={clickPoromotion} sx={{m:'auto'}} size="small"/>
            </Box>
          </Box> */}
          {/* <Box sx={{mb: '4px', mx: 2, display: apply ? 'block' : 'none', textAlign: 'right'}}>
            <TextField
              multiline
              rows={4}
              size='small'
              sx={{  width: '100%', mt: 1, mb: 1 }}
              placeholder='Explain your reasons for promotion'
            />
            <Button
              variant='outlined'
              onClick={cancelPoromotion}
              size='small'
              >Cancel
            </Button>
          </Box> */}
          <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <Typography variant="h6" component="h6" sx={{m: 'auto'}}>
              Department
            </Typography>
            <TextField
              size='small'
              sx={{ ml: 1, width: '74%', p:1 }}
              value={department}
              onChange={ (e) => setDepartment(e.target.value) }
            />
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', my: '4px'}}>
            <Typography variant="h6" component="h6" sx={{m: 'auto'}}>
              Program
            </Typography>
            <TextField
              size='small'
              sx={{ ml: 1, width: '74%', p:1 }}
              value={program}
              onChange={ (e) => setProgram(e.target.value) }
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Button
              variant='outlined'
              onClick={clickCancel}
              >Cancel
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={clickSave}
              >Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProfile;