import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={true}
      swipeable={true}
      centerMode={false}
      showStatus={false}
    >
      <Box>
        <CardMedia
          component='img'
          image='/Web1.jpg'
          sx={{ height: "100%", width: "auto" }}
        />
      </Box>
      <Box>
        <CardMedia
          component='img'
          image='/SEO.jpg'
          sx={{ height: "100%", width: "auto" }}
        />
      </Box>
      <Box>
        <CardMedia
          component='img'
          image='/development.jpg'
          sx={{ height: "100%", width: "auto" }}
        />
      </Box>
    </Carousel>
  );
};

export default MainCarousel;
