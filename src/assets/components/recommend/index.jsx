import { Box, Grid, Typography, Container, Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";
import img6 from "../../assets/6.webp";
import img7 from "../../assets/7.webp";
import img8 from "../../assets/8.webp";

const Recommend = () => {
  const data = [
    {
      id: 0,
      img: img1,
      title: "BIGSTEPS",
      text: "LARGE TERRARIUM",
      price: "$129.00 USD",
    },
    {
        id: 0,
        img: img2,
        title: "BIGSTEPS",
        text: "DOGS FOOD",
        price: "$12.00 USD ",
        pending:'YOU SAVE $3.00 USD',
        c: '$15.00 USD'
      },
      {
        id: 0,
        img: img3,
        title: "BIGSTEPS",
        text: "ADULT DOGS FOOD",
        price: "$15.00 USD",
        pending:'YOU SAVE $3.00 USD',
        c: '$18.00 USD'
      },
      {
        id: 0,
        img: img4,
        title: "BIGSTEPS",
        text: "WEATHER RESISTANT CAGE",
        price: "$159.00 USD",
      },
      {
        id: 0,
        img: img5,
        title: "BIGSTEPS",
        text: "CATS FOOD",
        price: "$19.00 USD",
        pending:'YOU SAVE $6.00 USD',
        c: '$25.00 USD'
      },
      {
        id: 0,
        img: img6,
        title: "BIGSTEPS",
        text: "BIRDS CAGE",
        price: "$24.00 USD",
      },
      {
        id: 0,
        img: img7,
        title: "BIGSTEPS",
        text: "COOKIES FOR CATS",
        price: "$12.00 USD",
      },
      {
        id: 0,
        img: img8,
        title: "BIGSTEPS",
        text: "BIRDS FOOD",
        price: "$12.00 USD",
      },
  ];
  return (
    <Box sx={{ backgroundColor: '#fafafa' }}>
      <Container>
      <Typography variant="h5" sx={{ textAlign: "center", py: 8 }}>
        RECOMMENDED
      </Typography>
      <Grid container columns={12} spacing={5}>
       {
        data.map((v, i)=>(
            <Grid key={i} xs={6} md={4} lg={3} >
            <Box sx={{ maxWidth: 260, backgroundColor: '#fafafa' }}>
              <CardMedia
                component="img"
                height="340"
                image={v.img}
              />
              <CardContent sx={{textAlign: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{color:'#b4b4b4',fontSize:'12px'}}>
                  {v.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{color:'rgb(45, 44, 44)'}}>
                  {v.text}
                </Typography>
                <Rating name="no-value" value={null} />
                <Typography variant="body2" color="text.secondary" sx={{color:'#000',fontWeight:600,boxSizing:'inherit'}}>
                  {v.price} <s style={{color:'rgb(154, 195, 225)'}}>{v.c}</s>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'11px',fontWeight:400,textTransform:'uppercase',color:'#b4b4b4'}}>
                  {v.pending}
                </Typography>
              </CardContent>
             
            </Box>
          </Grid>
        ))
       }
      </Grid>
      </Container>
    </Box>
  );
};

export default Recommend;
