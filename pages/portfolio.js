import { Box, CardMedia, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import React from "react";

const Portfolio = () => {
  return (
    <Box sx={{ backgroundColor: "#1bc9cf", pb:"15%" }}>
      <Box sx={{ mx: 5 }}>
        <NextSeo
          title='Portfolio of Elegant Web Technologies'
          description='Elegant Web Technologies is a website Design company in Navi Mumbai'
        />
        <CardMedia
          component='img'
          image='/portfolio-elegant-web-technologies.jpg'
          sx={{
            height: "175px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            mt: -15,
            fontFamily: ["Oleo Script", "sans-serif"].join(","),
            fontSize: { sm: 30, lg: 40 },
          }}
        >
          Contact Us
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: "25%", sm: "15%", md: "15%", lg: "10%" },
        }}
      >
        <CardMedia
          component='img'
          image='/page-under-construction.png'
          sx={{
            height: "auto",
            width: "60%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            mr: { md: 5 },
            ml: { xs: "20%", sm: "20%", md: "20%", lg: "20%" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;
