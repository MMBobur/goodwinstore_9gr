import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Background from '../../assets/background1.webp'
import Dog from '../../assets/dog.webp'
import Fish from '../../assets/fish.webp'
import Rabbit from '../../assets/rabbits.webp'
import Cat from '../../assets/cat.webp'
import Parrot from '../../assets/parrot.webp'
import Turtle from '../../assets/turtle.webp'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid justifyContent='center' sx={{paddingTop:'5%',paddingBottom:'5%',backgroundImage:`url(${Background})`}} container spacing={2}>
        <Grid item xs={5} sm={2.5} md={2.5} lg={2.5} >
            <Box sx={{background:'black',height:'98.5%',width:'98%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Dog} width='100%' /></Box>
            </Box>
        </Grid>
        <Grid item xs={5} sm={2.5} md={2.5} lg={2.5}>
            <Box sx={{background:'black',height:'47%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Fish} width='100%' /></Box>
            </Box>
            <Box sx={{background:'black',height:'47%',marginTop:'8%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Rabbit} width='100%' /></Box>
            </Box>
        </Grid>
        <Grid item xs={5} sm={2.5} md={2.5} lg={2.5}>
            <Box sx={{background:'black',height:'98.5%',width:'98%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Cat} width='100%' /></Box>
            </Box>
        </Grid>
        <Grid item xs={5} sm={2.5} md={2.5} lg={2.5}>
        <Box sx={{background:'black',height:'47%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Parrot} width='100%' /></Box>
            </Box>
            <Box sx={{background:'black',height:'47%',marginTop:'8%'}} >
                <Box sx={{'&:hover':{ opacity: 0.8 }}}><img src={Turtle} width='100%' /></Box>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
