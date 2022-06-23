import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation, Autoplay } from "swiper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Img1 from "../../assets/Pets.PNG";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: "#F9FCF8" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid justifyContent="center" container spacing={2}>
              <Grid item xs={5} sx={{ marginTop: "5%" }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                      },
                      color: "black",
                      paddingBottom: "3%",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>EVERYTHING</span>
                    <br />
                    <span style={{ fontWeight: "bold", color: "#9AC3E1" }}>
                      YOU NEED
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0", sm: "15px", md: "15px", lg: "15px" },
                      height: {
                        xs: "20px",
                        sm: "90px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                  >
                    When you buy online? pick up in store and you
                    <br />
                    can safe your money
                  </Typography>
                  <a
                    className="btn btn-center"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    href="#"
                  >
                    SHOW ALL
                  </a>
                  <Box
                    sx={{
                      paddingBottom: {
                        xs: "100%",
                        sm: "0",
                        md: "0",
                        lg: "15%",
                      },
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ marginTop: "1%" }}>
                  <img src={Img1} style={{ width: "90%" }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#F9FCF8" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid justifyContent="center" container spacing={2}>
              <Grid item xs={5} sx={{ marginTop: "5%" }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                      },
                      color: "black",
                      paddingBottom: "3%",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>Save up</span> to
                    <br />{" "}
                    <span style={{ fontWeight: "bold", color: "#9AC3E1" }}>
                      40%
                    </span>{" "}
                    of money
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0", sm: "15px", md: "15px", lg: "15px" },
                      height: {
                        xs: "20px",
                        sm: "90px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                  >
                    When you buy online? pick up in store and you
                    <br />
                    can safe your money
                  </Typography>
                  {/* <a
                    href="https://olcha.uz/ru"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    SHOP NOW
                  </a> */}
                  <a
                    className="btn btn-center"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "15px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    href="#"
                  >
                    SHOW ALL
                  </a>

                  <Box
                    sx={{
                      paddingBottom: {
                        xs: "100%",
                        sm: "0",
                        md: "0",
                        lg: "15%",
                      },
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ marginTop: "1%" }}>
                  <img src={Img1} style={{ width: "90%" }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              container
              className="div"
              sx={{
                // textAlign: "center",
                background: "#9AC3E1",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  color: "white",
                  marginLeft: { xs: "5%", sm: "0", md: "0", lg: "0" },
                  justifyContent: {
                    xs: "left",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
                spacing={2}
              >
                <Box>
                  <LocalShippingOutlinedIcon
                    className="icon1"
                    sx={{ fontSize: "40px" }}
                  />
                </Box>
                <Box sx={{ fontWeight: "bold", textAlign: "left" }}>
                  FREE WORLWIDE DELIVERY
                  <br />
                  <span style={{ fontWeight: "500", fontSize: "13px" }}>
                    LOREM IPSUM DOLOR SIT AMET
                  </span>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              container
              className="div"
              sx={{
                textAlign: "center",
                background: "#E5B775",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  color: "white",
                  marginLeft: { xs: "5%", sm: "0", md: "0", lg: "0" },
                  justifyContent: {
                    xs: "left",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
                spacing={2}
              >
                <Box>
                  <KeyboardBackspaceIcon
                    className="icon1"
                    sx={{ fontSize: "40px" }}
                  />
                </Box>
                <Box sx={{ fontWeight: "bold", textAlign: "left" }}>
                  FREE WORLWIDE DELIVERY
                  <br />
                  <span style={{ fontWeight: "500", fontSize: "13px" }}>
                    LOREM IPSUM DOLOR SIT AMET
                  </span>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              container
              className="div"
              sx={{
                textAlign: "center",
                background: "#A3CF71",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  color: "white",
                  marginLeft: { xs: "5%", sm: "0", md: "0", lg: "0" },
                  justifyContent: {
                    xs: "left",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
                spacing={2}
              >
                <Box>
                  <PhoneInTalkIcon
                    className="icon1"
                    sx={{ fontSize: "40px" }}
                  />
                </Box>
                <Box sx={{ fontWeight: "bold", textAlign: "left" }}>
                  FREE WORLWIDE DELIVERY
                  <br />
                  <span style={{ fontWeight: "500", fontSize: "13px" }}>
                    LOREM IPSUM DOLOR SIT AMET
                  </span>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
