import { Box, CardMedia } from "@mui/material";
import { NextSeo } from "next-seo";
import React from "react";

export default function Custom404() {
  return (
    <Box sx={{ backgroundColor: "#1bc9cf", pb: "15%" }}>
      <NextSeo title='Page Not Found' description='Page Not Found' />
      <Box
        sx={{
          textAlign: "center",
          // mt: { xs: "25%", sm: "15%", md: "15%", lg: "10%" },
        }}
      >
        <CardMedia
          component='img'
          image='/page-not-found.jpg'
          sx={{
            height: "auto",
            width: "60%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            mr: { md: 5 },
            ml: { xs: "20%", sm: "20%", md: "20%", lg: "20%" },
            pt: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
          }}
        />
      </Box>
    </Box>
  );
}
