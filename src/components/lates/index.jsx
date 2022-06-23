// import React from 'react'
// import './styles.css'
// import Rasm from '../../assets/img_avatar3.webp'

// const index = () => {
//   return (
//     <div>
//         <div className="container">
//             {/* <img src={Rasm} alt="Avatar" class="image"> */}
//             <img src={Rasm} className='image' />
//             <div className="overlay">
//                 <div className="text">hello</div>
//             </div>
//             </div>
//     </div>
//   )
// }

// export default index

import * as React from "react";
import './styles.css'

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rasm1 from "../../assets/one.webp";
import Rasm2 from "../../assets/two.webp";
import Rating from '@mui/material/Rating';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rasm3 from "../../assets/three.webp";
import Rasm4 from "../../assets/four.webp";
import Rasm5 from "../../assets/five.webp";
import Rasm6 from "../../assets/six.webp";
import Rasm7 from "../../assets/seven.webp";
import Rasm8 from "../../assets/eight.webp";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,background:'#FAFAFA',paddingBottom:'5%' }}>
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={12} >
          <Typography sx={{textAlign:'center',paddingTop:'5%',paddingBottom:'2%',fontSize:'30px',fontWeight:'bold'}} >LATEST PRODUCTS</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={2.5} lg={2.5}>
          <Box className='onediv' sx={{ padding: "3%" }}>
            <Box>
                <Box sx={{padding:'3%'}}>
                    <Typography sx={{position:'relative',width:'50px',textAlign:'center',fontSize:'13px',fontWeight:'bold',background:'#A3CF71',color:'white' }} >NEW</Typography>
                </Box>
                <Box className='check' sx={{textAlign:'right',marginTop:'-38px'}} ><Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></Box>
                <Box className='check' sx={{textAlign:'end',marginTop:'-5px'}} ><RemoveRedEyeIcon sx={{position:'relative',marginRight:'9px'}} /></Box>
              <div className="container">
                {/* <img src={Rasm} alt="Avatar" class="image"> */}
                <img src={Rasm2} className="image" />
                <div className="overlay">
                  <div className="text"><img src={Rasm1} style={{width:'100%'}} /></div>
                </div>
              </div>
              <Box sx={{textAlign:'center',marginTop:{ xs:'150px',sm:'35px',md:'90px',lg:'0' }}} >
                <Typography sx={{color:'gray',fontSize:'12px'}} >BIGSTEPS</Typography>
                <Typography sx={{fontSize:'16px',transition:'0.2s',cursor:'pointer','&:hover': { color:'#9AC3E1' }}} >Decor for Terrarium</Typography>
                <Rating name="size-small"  size="small" />
                <Typography sx={{fontSize:'15px',fontWeight:'bold'}} >$19.00 USD</Typography>
                <Button className="btn1" sx={{fontSize:'15px',backgroundColor:'#9AC3E1','&:hover': { background:'black' },borderRadius:'0',color:'white',width:'100%',marginTop:'5%'}}><LockIcon/>ADD TO CARD</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.5} lg={2.5}>
        <Box className='onediv' sx={{ padding: "3%" }}>
            <Box>
                <Box sx={{padding:'3%'}}>
                    <Typography sx={{position:'relative',width:'50px',textAlign:'center',fontSize:'13px',fontWeight:'bold',background:'#A3CF71',color:'white' }} >NEW</Typography>
                </Box>
                <Box className='check' sx={{textAlign:'right',marginTop:'-38px'}} ><Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></Box>
                <Box className='check' sx={{textAlign:'end',marginTop:'-5px'}} ><RemoveRedEyeIcon sx={{position:'relative',marginRight:'9px'}} /></Box>
              <div className="container">
                {/* <img src={Rasm} alt="Avatar" class="image"> */}
                <img src={Rasm3} className="image" />
                <div className="overlay">
                  <div className="text"><img src={Rasm4} style={{width:'100%'}} /></div>
                </div>
              </div>
              <Box sx={{textAlign:'center',marginTop:{ xs:'150px',sm:'35px',md:'90px',lg:'0' }}} >
                <Typography sx={{color:'gray',fontSize:'12px'}} >BIGSTEPS</Typography>
                <Typography sx={{fontSize:'16px',transition:'0.2s',cursor:'pointer','&:hover': { color:'#9AC3E1' }}} >Dental Stix</Typography>
                <Rating name="size-small"  size="small" />
                <Typography sx={{fontSize:'15px',fontWeight:'bold'}} >$3.00 USD</Typography>
                <Button className="btn1" sx={{fontSize:'15px',backgroundColor:'#9AC3E1','&:hover': { background:'black' },borderRadius:'0',color:'white',width:'100%',marginTop:'5%'}}><LockIcon/>ADD TO CARD</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={4} md={2.5} lg={2.5} sx={{display:{ xs:'none', sm:'flex',md:'flex', lg:'flex' }}} >
        <Box className='onediv' sx={{ padding: "3%" }}>
            <Box>
                <Box sx={{padding:'3%'}}>
                    <Typography sx={{position:'relative',width:'50px',textAlign:'center',fontSize:'13px',fontWeight:'bold',background:'#A3CF71',color:'white' }} >NEW</Typography>
                </Box>
                <Box className='check' sx={{textAlign:'right',marginTop:'-38px'}} ><Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></Box>
                <Box className='check' sx={{textAlign:'end',marginTop:'-5px'}} ><RemoveRedEyeIcon sx={{position:'relative',marginRight:'9px'}} /></Box>
              <div className="container">
                {/* <img src={Rasm} alt="Avatar" class="image"> */}
                <img src={Rasm5} className="image" />
                <div className="overlay">
                  <div className="text"><img src={Rasm6} style={{width:'100%'}} /></div>
                </div>
              </div>
              <Box sx={{textAlign:'center',marginTop:{ xs:'150px',sm:'35px',md:'90px',lg:'0' }}} >
                <Typography sx={{color:'gray',fontSize:'12px'}} >BIGSTEPS</Typography>
                <Typography sx={{fontSize:'16px',transition:'0.2s',cursor:'pointer','&:hover': { color:'#9AC3E1' }}} >Birds Food</Typography>
                <Rating name="size-small"  size="small" />
                <Typography sx={{fontSize:'15px',fontWeight:'bold'}} >$12.00 USD</Typography>
                <Button className="btn1" sx={{fontSize:'15px',backgroundColor:'#9AC3E1','&:hover': { background:'black' },borderRadius:'0',color:'white',width:'100%',marginTop:'5%'}}><LockIcon/>ADD TO CARD</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2.5} sx={{display:{ xs:'none', sm:'none',md:'flex', lg:'flex' }}}>
        <Box className='onediv' sx={{ padding: "3%" }}>
            <Box>
                <Box sx={{padding:'3%'}}>
                    <Typography sx={{position:'relative',width:'50px',textAlign:'center',fontSize:'13px',fontWeight:'bold',background:'#A3CF71',color:'white' }} >NEW</Typography>
                </Box>
                <Box className='check' sx={{textAlign:'right',marginTop:'-38px'}} ><Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></Box>
                <Box className='check' sx={{textAlign:'end',marginTop:'-5px'}} ><RemoveRedEyeIcon sx={{position:'relative',marginRight:'9px'}} /></Box>
              <div className="container">
                {/* <img src={Rasm} alt="Avatar" class="image"> */}
                <img src={Rasm7} className="image" />
                <div className="overlay">
                  <div className="text"><img src={Rasm8} style={{width:'100%'}} /></div>
                </div>
              </div>
              <Box sx={{textAlign:'center',marginTop:{ xs:'150px',sm:'35px',md:'90px',lg:'0' }}} >
                <Typography sx={{color:'gray',fontSize:'12px'}} >BIGSTEPS</Typography>
                <Typography sx={{fontSize:'16px',transition:'0.2s',cursor:'pointer','&:hover': { color:'#9AC3E1' }}} >Rabbits Food</Typography>
                <Rating name="size-small"  size="small" />
                <Typography sx={{fontSize:'15px',fontWeight:'bold'}} >$14.00 USD</Typography>
                <Button className="btn1" sx={{fontSize:'15px',backgroundColor:'#9AC3E1','&:hover': { background:'black' },borderRadius:'0',color:'white',width:'100%',marginTop:'5%'}}><LockIcon/>ADD TO CARD</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{textAlign:'center'}}>
        <a className="btn btn-center" style={{textDecoration:'none'}} href='#'>SHOW ALL</a>
      </Box>
    </Box>
  );
}
