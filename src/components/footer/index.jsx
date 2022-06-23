import { Container, Grid,Box,Typography,Icon } from '@mui/material'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import React from 'react'
import img from '../../assets/rasm.jpg'
import img1 from '../../assets/rasm1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer () {
  return (
    <Box>
        <Container sx={{py: 8 }}>
            <Grid container columns={12} >
                <Grid xs={12} md={6} lg={4}>
                    <Box sx={{display:'flex',gap:12}}>
                    <Box>
                        <Typography style={{fontSize:'14px',fontWeight:600,lineHeight:'1.7em',textTransform:'uppercase',color:'#000'}}>CATEGORIES</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>WOMEN'S</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>MEN'S</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>ACCESSORIES</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>BRANDS</Typography>
                    </Box>
                    <Box>
                        <Typography  style={{fontSize:'14px',fontWeight:600,lineHeight:'1.7em',textTransform:'uppercase',color:'#000'}}>INFORMATION</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>ABOUT US</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>BLOG</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>GALLERY</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>F.A.Q.</Typography>
                        <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>CONTACT INFO</Typography>
                    </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <Box sx={{display:'flex',gap: 10}}>
                        <Box>
                            <Typography  style={{fontSize:'14px',fontWeight:600,lineHeight:'1.7em',textTransform:'uppercase',color:'#000'}}>MY ACCOUNT</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>SIGN IN</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>MY ACCOUNT</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>VIEW CART</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>MY WISHLIST</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>ORDER STATUS</Typography>
                        </Box>
                        <Box>
                            <Typography  style={{fontSize:'14px',fontWeight:600,lineHeight:'1.7em',textTransform:'uppercase',color:'#000'}}>CONDITIONS OF USE</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>TERMS OF SERVICE</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>PRIVACY POLICY</Typography>
                            <Typography sx={{marginTop:'15px',color:'#656565',fontSize:'12px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase'}}>REFUND POLICY</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <Box>
                        <Box>
                            <Typography  style={{fontSize:'14px',fontWeight:600,lineHeight:'2em',textTransform:'uppercase',color:'#000'}}>CONTACT US</Typography>
                            <Box>
                            <span style={{fontSize:'13px',color:'inherit',color:'#656565',fontWeight:400,lineHeight:'2em',textTransform:'uppercase'}}>CALL US:</span>
                            <span style={{fontSize:'13px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase',color:'inherit',margin:20}}>1 (800) 233-2742</span>
                            </Box>
                            <span style={{fontSize:'13px',color:'inherit',color:'#656565',fontWeight:400,lineHeight:'2em',textTransform:'uppercase'}}>HOURS:</span>  
                            <span style={{fontSize:'13px',color:'inherit',color:'#656565',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',margin:20}}>MON-FRI 9AM-8PM</span>
                            <br></br>
                            <span style={{fontSize:'13px',fontWeight:400,lineHeight:'1.5em',textTransform:'uppercase',color:'inherit',margin:66}}>SAT 9AM-6PM</span>
                            <br></br>
                            <span style={{fontSize:'13px',color:'#656565',fontWeight:400,lineHeight:'1.7em',textTransform:'uppercase'}}>E-MAIL: </span>
                            <span style={{fontSize:'13px',color:'inherit',color:'rgb(154, 195, 225)',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',margin:20}}>INFO@GOODWIN.US</span>
                            <br></br>
                            <span style={{fontSize:'13px',color:'#656565',fontWeight:400,lineHeight:'1.7em',textTransform:'uppercase'}}>ADDRESS:</span>
                            <span style={{fontSize:'13px',color:'inherit',color:'#656565',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',margin:12}}>GOODWIN STORE 140 NEW STR.,</span>
                            <br></br>
                            <span style={{fontSize:'13px',color:'inherit',color:'#656565',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',margin:70}}>SUITE 21 BROOKLYN, NY</span>
                            <br></br>
                            <Box>
                                <Box sx={{display:'flex',gap:2,paddingTop:'20px'}}>
                            <TextsmsOutlinedIcon sx={{color:'rgb(154, 195, 225)'}} />
                            <Typography sx={{color:'black',fontWeight:600}}>LIVE CHAT</Typography>
                            </Box>
                            </Box>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Box>
                                <Box>
                                    <Container>
                                        <Grid sx={{display:'flex',gap:8,py:8}} columns={12}>
                                            <Grid xs={12} md={6} lg={3}> <img width='140' src={img}/></Grid>
                                            <Grid xs={12} md={6} lg={3}>
                                                <Typography sx={{fontSize:'10px',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',position:'relative',width:'100%',minHeight:'1px',paddingRight:'15px',paddingLeft:'15px'}}>© COPYRIGHT 2020 GOODWINSTORE. ALL RIGHTS RESERVED.</Typography>
                                                <Typography sx={{fontSize:'10px',fontWeight:400,lineHeight:'2em',textTransform:'uppercase',position:'relative',width:'100%',minHeight:'1px',paddingRight:'15px',paddingLeft:'15px'}}>TERMS & CONDITIONS PRIVACY POLICY</Typography>
                                            </Grid>
                                            <Grid xs={12} md={6} lg={3}><img src={img1}></img></Grid>
                                            <Grid xs={12} md={6} lg={3} sx={{display:'flex',gap:3}}>
                                            <Icon sx={{color:'#B4B4B4',backgroundColor:'white'}}>
                                        <FacebookIcon />
                                        </Icon>
                                        <Icon sx={{color:'#B4B4B4'}}>
                                        <TwitterIcon/>
                                        </Icon>
                                        <Icon  sx={{color:'#B4B4B4'}}>
                                        <YouTubeIcon />
                                        </Icon>
                                        <Icon  sx={{color:'#B4B4B4'}}>
                                        <InstagramIcon />
                                        </Icon>
                                        <Icon  sx={{color:'#B4B4B4'}}>
                                        <PinterestIcon />
                                        </Icon>
                                            </Grid>
                                        </Grid>
                                   
                                    </Container>
                                    </Box>
                                    </Box>
                                    </Box>
  )
}

export default Footer