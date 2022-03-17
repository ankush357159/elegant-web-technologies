import { Box, Typography } from "@mui/material";
import React from "react";

const CompanyProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: { xs: 0, sm: 2, md: 2, lg: 2 },
      }}
    >
      <Typography sx={{ color: "#404241", textAlign: "justify" }}>
        We are Elegant Web Technologies present ourselves as IT company
        specialized in Web Designing, Web Development, Search Engine
        Optimization services, Software Development and Digital Marketing
        Services.
      </Typography>
      <Typography sx={{ color: "#404241", textAlign: "justify" }}>
        Elegant Web Technologies is a reputed name in the IT sector. With over a
        seven years of experience since its inception in 2015, Elegant Web
        Technologies caters to a wide array of clients on a global scale,
        helping them to reach out and make their mark. We have completed a large
        number of projects for companies in the India, Middle East, USA, Canada,
        UK etc.
      </Typography>
      <Typography sx={{ color: "#404241", textAlign: "justify" }}>
        The company has built its reputation in the global market on result
        oriented solutions, cost-effective services and customized services. Our
        focus is on personalized service, avoiding auto generated responses and
        dedicated support after service. Our team is qualified, expert and
        professionals who are always ready to translating a client’s
        requirements into reality.
      </Typography>
      <Typography>
        We have inhouse web designers, web developers, Digital Marekting (SEO)
        experts and specialists are ready to work on your project.
      </Typography>
    </Box>
  );
};

export default CompanyProfile;
