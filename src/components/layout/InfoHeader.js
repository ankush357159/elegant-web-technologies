import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const InfoHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5bc42",
        color: "#30302f",
        p: 1,
        display: { xs: "none", sm: "block", md: "block", lg: "block" },
      }}
    >
      <Typography sx={{ pl: 10 }}>
        We are one of the Best Website Development Company in Mumbai
      </Typography>
    </Box>
  );
};

export default InfoHeader;
