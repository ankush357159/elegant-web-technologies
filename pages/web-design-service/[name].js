import React from "react";
import {
  Box,
  Button,
  CardMedia,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { NextSeo } from "next-seo";

const Services = () => {
  const router = useRouter();
  const { name } = router.query;
  // console.log(name);
  return (
    <Box sx={{mx:5}}>
       <NextSeo
        title={`Website Design Company in ${name}`}
        description={`Elegant Web Technologies is a website Design company in ${name}`}
      />
      <CardMedia
        component='img'
        image='/website-design-service.jpg'
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
        Website Design Services in {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 15, mx: 1 }}>
        <Box sx={{ width: "30%" }}>
          <CardMedia
            component='img'
            image='/website-design.jpg'
            sx={{
              height: "200px",
              width: "auto",
              backgroundPosition: "center",
              backgroundSize: "cover",
              mt: 2,
            }}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant='contained'
              sx={{ width: "100%", backgroundColor: "#fa9e00" }}
            >
              Website Design
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant='contained'
              sx={{
                width: "100%",
                backgroundColor: "#fa9e00",
              }}
            >
              Website Development
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant='contained'
              sx={{ width: "100%", backgroundColor: "#fa9e00" }}
            >
              SEO Services
            </Button>
          </Box>
        </Box>
        <Box sx={{ mx: 4 }}>
          <Typography sx={{ fontSize: { sm: 22, lg: 30 }, fontWeight: 600 }}>
            Website Design Services in {name}
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            Elegant Web Technologies is best website design company in {name}.
            We provide web design and development services in Mumbai, Navi
            Mumbai and Thane since last 7 years. We have experienced and
            professional team of website designers and developers. We are
            committed to provide best website design services in the city. We
            have developed more than 1000 website till the date and number goes
            adding.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Website design is most important thing for any company as nowadays
            online presence of any company is most important. We develop a
            website with a quality standards. We are reputed website design
            company in {name}.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Website design company should have trust, reliability and innovation
            to build more customers from the market. We are always tried to make
            our customer satisfied with affordable cost and provide the service
            within the timeline.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Our website designers and developers are expert having more than 5
            to 8+ years of experience. We uses below technologies for website
            design and development:
          </Typography>
          <List>
            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='HTML, CSS & JAVASCRIPT' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='ReactJS' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Django Framework' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Laravel' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Python' />
            </ListItem>
          </List>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
