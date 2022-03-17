import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  const cities = [
    { id: 1, name: "Vashi" },
    { id: 2, name: "CBD Belapur" },
    { id: 3, name: "Nerul" },
    { id: 4, name: "Kharghar" },
    { id: 5, name: "Airoli" },
    { id: 6, name: "Turbhe" },
    { id: 7, name: "Panvel" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#091723",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "start",
        py: { md: 4, lg: 3 },
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { md: "25%", lg: "25%" }, textAlign: "center" }}>
        <Typography
          sx={{
            mt: { xs: 1 },
            fontSize: { xs: 22, sm: 24, lg: 24 },
            textAlign: { md: "center" },
          }}
        >
          Our Services
        </Typography>
        {cities.map((city, id) => (
          <Link
            key={city.id}
            href={`/web-design-service/${city.name} `}
            passHref={true}
          >
            <Typography
              sx={{
                mt: 1,
                cursor: "pointer",
                fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
              }}
            >
              Web Design Company in {city.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ width: { md: "25%", lg: "25%" }, textAlign: "center" }}>
        <Typography
          sx={{
            mt: { xs: 1 },
            fontSize: { xs: 22, sm: 24, lg: 24 },
            textAlign: "center",
          }}
        >
          Our Services
        </Typography>
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/web-development-service/${city.name} `}
            passHref={true}
          >
            <Typography
              key={city.id}
              sx={{
                mt: 1,
                cursor: "pointer",
                fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
              }}
            >
              Software Development in {city.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ width: { md: "25%", lg: "25%" }, textAlign: "center" }}>
        <Typography
          sx={{
            mt: { xs: 1, sm: 2, md: 3, lg: 1 },
            fontSize: { xs: 22, sm: 24, lg: 24 },
            textAlign: "center",
          }}
        >
          Our Services
        </Typography>
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/seo-service/${city.name}`}
            passHref={true}
          >
            <Typography
              key={city.id}
              sx={{
                mt: 1,
                cursor: "pointer",
                fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
              }}
            >
              Search Engine Optimization in {city.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ width: { md: "25%", lg: "25%" }, textAlign: "center" }}>
        <Typography
          sx={{
            mt: { xs: 1, sm: 1, md: 1, lg: 2 },
            fontSize: { xs: 22, sm: 24, md: 24, lg: 24 },
          }}
        >
          Our Address
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left" },
            ml: { md: 2 },
            fontSize: { md: 12, lg: 14 },
            fontWeight: 600,
            mt: { md: 1, lg: 1 },
          }}
        >
          Registered Office
        </Typography>
        <Box component='span' sx={{ textAlign: "left" }}>
          <LocationOnIcon
            sx={{ color: "#fa9e00", fontSize: { xs: 14, sm: 16, lg: 14 } }}
          />
          <Typography
            component='span'
            sx={{
              mt: 1,
              cursor: "pointer",
              fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
              mr: { md: 2, lg: 3 },
              textAlign: { md: "left" },
              justifyContent: "left",
            }}
          >
            902, Bhoomi Harmony, Sector 18, Kamothe, Navi Mumbai - 410209
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Box component='span' sx={{ textAlign: "center" }}>
            <PhoneIcon
              sx={{ color: "#fa9e00", pt: { xs: 1 }, ml: { md: 1.5 } }}
            />
            <Typography
              component='span'
              sx={{
                cursor: "pointer",
                fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
              }}
            >
              +91 9967280727
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <Box component='span' sx={{ textAlign: "left" }}>
            <MailIcon sx={{ color: "#fa9e00", pt: { xs: 1 }, ml: { md: 2 } }} />
            <Typography
              component='span'
              sx={{
                cursor: "pointer",
                fontSize: { xs: 12, sm: 14, md: 12, lg: 14 },
                textAlign: "left",
              }}
            >
              ankush357159@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
