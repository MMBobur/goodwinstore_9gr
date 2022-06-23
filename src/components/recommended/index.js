import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import img1 from "../../assets/image1.webp"
import img2 from "../../assets/image2.webp"
import img3 from "../../assets/image3.webp"
import img4 from "../../assets/image4.webp"
import img5 from "../../assets/image5.webp"
import img6 from "../../assets/image6.webp"
import img7 from "../../assets/image7.webp"
import img8 from "../../assets/image8.webp"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%', height: 'auto', backgroundColor: '#FAFAFA', flexGrow: 1, }}>
            <Typography style={{ fontSize: '25px', textAlign: 'center', fontFamily: 'Segoe UI Black', padding: '40px' }}>RECOMMENDED</Typography>
            <Container spacing={1}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={3} sm={6} xs={12}>
                        <img style={{ width: '100%', height: '350px' }} src={img1} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>LARGE TERRARIUM</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>  $129.00 USD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <Box style={{ width: '50px', height: '25px', position: 'absolute', marginTop: '10px', backgroundColor: '#DFB272', color: 'white', fontSize: '15px', textAlign: 'center', marginLeft: '10px' }}>-20%</Box>
                        <img style={{ width: '100%', height: '350px' }} src={img2} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>DOGS FOOD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$12.00 USD <s style={{ color: '#9AC3E1' }}>$15.00 USD</s></Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <Box style={{ width: '50px', height: '25px', position: 'absolute', marginTop: '10px', backgroundColor: '#DFB272', color: 'white', fontSize: '15px', textAlign: 'center', marginLeft: '10px' }}>-20%</Box>
                        <img style={{ width: '100%', height: '350px' }} src={img3} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>ADULT DOGS FOOD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$15.00 USD <s style={{ color: '#9AC3E1' }}>$18.00 USD</s></Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <img style={{ width: '100%', height: '350px' }} src={img4} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>WEATHER RESISTANT CAGE</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$159.00 USD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>
                </Grid>



                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '50px' }}>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box style={{ width: '50px', height: '25px', position: 'absolute', marginTop: '10px', backgroundColor: '#DFB272', color: 'white', fontSize: '15px', textAlign: 'center', marginLeft: '10px' }}>-20%</Box>
                        <img style={{ width: '100%', height: '350px' }} src={img5} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>CATS FOOD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$19.00 USD <s style={{ color: '#9AC3E1' }}>$25.00 USD</s></Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <img style={{ width: '100%', height: '350px' }} src={img6} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>DOGS FOOD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$159.00 USD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <img style={{ width: '100%', height: '350px' }} src={img7} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>ADULT DOGS FOOD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$159.00 USD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <img style={{ width: '100%', height: '350px' }} src={img8} alt="" />
                        <Typography style={{ fontSize: '12px', color: 'gray', textAlign: 'center' }}>BIGSTEPS</Typography>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>WEATHER RESISTANT CAGE</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                            <AiOutlineStar style={{ fontSize: '15px', color: 'gray', marginTop: '5px' }} />
                        </Box>
                        <Typography style={{ fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '5px' }}>$159.00 USD</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ "&:hover": { backgroundColor: 'black' }, width: '90%', backgroundColor: '#9AC3E1', borderRadius: '0px', color: 'white', textAlign: 'center', marginTop: '5px' }}><HiOutlineShoppingBag style={{ fontSize: '18px', marginTop: '-2px' }} />ㅤADD TO CART</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
