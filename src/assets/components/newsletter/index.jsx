import { Button, Grid, Input, Typography, Box, TextField, Container } from "@mui/material";
import React from "react";

function NewsLetter() {
  return (
    <Box  sx={{backgroundColor:'#C6DEEF',height:{ lg: '15vh', md: '20vh', xs: '30vh'},display:'flex',alignItems:'center',widows:'200px',height:'150px'}}>
      <Container>
    <Grid container columns={12}>
   <Grid item xs={12} md={6} lg={6}>
     <Typography sx={{marginLeft:'40px',color:'#4b5b7c',marginTop:'20px',fontWeight:600}}>SUBSCRIBE TO NEWSLETTER:</Typography>
   </Grid>
   <Grid item xs={12} md={6} lg={6}>
     <Box sx={{display:'flex'}}>
       <TextField  sx={{ width: "400px",backgroundColor:'#FFFFFF',color:'#B9B4CC',marginLeft:'-280px',height:'100%',borderColor:'#e2e2e2',borderWidth:'1px' }} label='ENTER YOUR EMAIL ADDRESS'></TextField>
       <TextField sx={{marginLeft:'60px',position:'relative',verticalAlign:'top',fontSize:'14px',lineHeight:'1em',fontFamily:'Open Sans, sans-serif',fontWeight:600,color:'#8DA3B2'}}label="SUBSCRIBE" variant="standard" />
     </Box>
   </Grid>
 </Grid>
  </Container>
  </Box>
  );
}

export default NewsLetter;
