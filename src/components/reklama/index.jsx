import { Container,Box,Grid,Typography} from '@mui/material'
import React from 'react'
import img from '../../assets/rasm.webp'
import img1 from '../../assets/rasm1.webp'
import img2 from '../../assets/rasm2.webp'
import img3 from '../../assets/rasm3.webp'
import './index.css'

function Reklama() {
  return (
    <Box>
        <Container sx={{display:'flex'}}>
            <Grid container columns={12}>
                <Grid item xs={12} md={6} lg={4}>
                    <Box>
                        <img src={img} />
                        <Typography sx={{color:'#000000',fontSize:'28px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-430px',marginLeft:'30px',fontFamily:'Fredoka One, sans-serif'}}>BUY 2 ITEMS</Typography>
                        <Typography sx={{color:'#f8525a',fontSize:'70px',fontWeight:700,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-400px',marginLeft:'42px',fontFamily:'Fredoka One, sans-serif'}}>GET</Typography>
                        <Typography sx={{color:'#f8525a',fontSize:'25px',fontWeight:700,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-330px',marginLeft:'42px',fontFamily:'Fredoka One, sans-serif'}}>1 FOR FREE</Typography>
                        <a
                    className="btn btn-center"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color:'#000000',
                      top:'-280px',
                      marginLeft:'60px'
                    }}
                  >
                    SHOP NOW
                  </a>
                    </Box>
                </Grid>
                <Grid item xs={10} md={6} lg={4}>
                    <Box>
                        <img src={img1} />
                        <Typography sx={{color:'#000000',fontSize:'25px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-180px',marginLeft:'40px',fontFamily:'Fredoka One, sans-serif'}}>PRODUCTS</Typography>
                        <Typography sx={{color:'#000000',fontSize:'35px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-150px',marginLeft:'35px',fontFamily:'Fredoka One, sans-serif'}}>For Birds</Typography>
                        <Typography sx={{color:'#9457EB',fontSize:'28px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-110px',marginLeft:'70px',fontFamily:'Fredoka One, sans-serif'}}>NEW</Typography>
                        <Typography sx={{color:'#9457EB',fontSize:'28px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-80px',marginLeft:'35px',fontFamily:'Fredoka One, sans-serif'}}>ARRIVALS</Typography>
                    </Box>
                    <Box>
                        <img src={img2} style={{paddingTop:'28px'}} />
                        <Typography sx={{color:'#000000',fontSize:'30px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-180px',marginLeft:'40px',fontFamily:'Fredoka One, sans-serif'}}>GET UP TO</Typography>
                        <Typography sx={{color:'#F4CA16',fontSize:'42px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-140px',marginLeft:'20px',fontFamily:'Fredoka One, sans-serif'}}>20% OFF!</Typography>
                        <a
                    className="btn btn-center"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color:'#000000',
                      top:'-80px',
                      marginLeft:'60px'
                    }}
                  >
                    SHOP NOW
                  </a>
                    </Box>
                </Grid>
                <Grid item xs={10} md={6} lg={4}>
                <Box>
                    <img src={img3} />
                    <Typography sx={{color:'#000000',fontSize:'25px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-450px',marginLeft:'120px',fontFamily:'Fredoka One, sans-serif'}}>SPECIAL OFFER</Typography>
                    <Typography sx={{color:'#000000',fontSize:'70px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-420px',marginLeft:'60px',fontFamily:'Fredoka One, sans-serif'}}>GET AN</Typography>
                    <Typography sx={{color:'#F4CA16',fontSize:'50px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-350px',marginLeft:'40px',fontFamily:'Fredoka One, sans-serif'}}>EXTRA 10%</Typography>
                    <Typography sx={{color:'#000000',fontSize:'21px',fontWeight:600,lineHeight:'1em',textAlign:'center',position:'absolute',marginTop:'-290px',marginLeft:'40px',fontFamily:'Fredoka One, sans-serif'}}>OFF YOUR FIRST ORDER</Typography>
                </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Reklama