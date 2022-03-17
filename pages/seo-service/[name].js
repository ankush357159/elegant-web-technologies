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
    <Box sx={{ mx: 5 }}>
      <NextSeo
        title={`SEO Service Company in ${name}`}
        description={`Elegant Web Technologies is a search engine optimisation company in ${name}`}
      />
      <CardMedia
        component='img'
        image='/seo-services.jpg'
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
        Search Engine Optimisation Services in {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 15, mx: 1 }}>
        <Box sx={{ width: "30%" }}>
          <CardMedia
            component='img'
            image='/search-engine-optimisation-service.jpg'
            sx={{
              height: { sm: "100px", md: "200px", lg: "200px" },
              width: { sm: "100px", md: "auto", lg: "auto" },
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
            Search Engine Optimisation (SEO) Services in {name}
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            Elegant Web Technologies is best search engine optimisation company
            in {name}. We provide web design development and seo services in
            Mumbai, Navi Mumbai and Thane since last 7 years. We have
            experienced and professional team of website designers and
            developers. We are committed to provide best engine optimisation
            services in the city. We have developed more than 300 website till
            the date and number goes adding.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Search engine optimisation is most important thing for any company
            as nowadays online presence of any company is most important. We
            develop a website with a quality standards. We are reputed search
            engine optimisation company in {name}.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            We have expertise in local search engine optimization as we are
            targeting our customers which are small scale or medium scales
            industries. We provide SEO services which is affordable to our
            clients and within their budget.
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Below are the some basic things which need to do for better and
            quick seo ranking, we are doing all the SEO activities within the
            said seo standard so that the seo result remain on top for long
            time:
          </Typography>
          <List>
            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Google my business listings' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Google reviews' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Google page speed' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Best website' />
            </ListItem>

            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Google analytics' />
            </ListItem>
            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Google Webmaster' />
            </ListItem>
            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Top listing in Justdial, Sulekha, IndiaMART, tradeindia etc' />
            </ListItem>
            <ListItem>
              <DoubleArrowIcon />
              <ListItemText primary='Social media pages' />
            </ListItem>
          </List>
          <Typography sx={{ textAlign: "justify" }}>
            If you are looking for cheap or low cost seo service company in Navi
            Mumbai then we are not entertaining the people or businesses who
            want to earn lot of money but do not want to spend for marketing
            activities. search engine optimization (SEO) is a purely marketing
            activity so initially you have to invest in the marketing to grow
            your business. You must have to take this risk because by doing a
            business, you already have taken a risk
          </Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Our mission is to make every small business presence over internet.
            In the internet era no business should be deprived from digital
            marketing. So our aim is to provide the best local seo service to
            companies in Navi Mumbai within the budget.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
