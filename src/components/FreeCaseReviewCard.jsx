import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SlotsCircleSVG from "./SlotsCircleSVG";

const containerStyles = {
  borderRadius: 6,
  overflow: "hidden",
  backgroundColor: "#fff",
  display: "flex",
  mx: "auto",
  position: "relative",
  boxShadow: 3,
  height: 400
};

const leftBoxStyles = {
  width: "45%",
  backgroundColor: "rgba(245, 230, 216, 0.6)",
  color: "#333",
  p: 4,
  m: 2,
  borderRadius: 3,
  backdropFilter: "blur(8px)",
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const circleRowStyles = {
  display: "flex",
  alignItems: "center",
  mb: 2
};

const circleIconStyles = (color) => ({
  width: 24,
  height: 24,
  backgroundColor: color,
  borderRadius: "50%",
  mr: 1
});

const circleTextStyles = {
  fontSize: 10,
  fontWeight: "bold"
};

const svgWrapperStyles = {
  position: "absolute",
  top: "50%",
  left: "52%",
  transform: "translate(-50%, -50%)",
  zIndex: 1
};

const rightBoxStyles = {
  width: "45%",
  position: "relative",
  px: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  py: 3
};

const textStyles = {
  alignSelf: "flex-end",
  textAlign: "right",
  color: "#333"
};

const buttonStyles = {
  alignSelf: "flex-end",
  backgroundColor: "#c2955c",
  color: "#fff",
  borderRadius: "40px",
  px: 3,
  py: 1.2,
  textTransform: "none",
  mt: "auto"
};

export default function FreeCaseReviewCard() {
  return (
    <Box sx={containerStyles}>
      <Box sx={leftBoxStyles}>
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Free
        </Typography>
        <Typography variant="h4" color="text.secondary" fontWeight={400} mb={4}>
          Case<br />Review
        </Typography>

        {[
          { color: "#cbd4e4", label: "100% Confidential" },
          { color: "#d6d1e3", label: "No Win, No Fee" },
          { color: "#e4cba3", label: "Free Case Evaluation" }
        ].map((item, idx) => (
          <Box key={idx} sx={circleRowStyles}>
            <Box sx={circleIconStyles(item.color)} />
            <Typography sx={circleTextStyles}>{item.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={svgWrapperStyles}>
        <SlotsCircleSVG />
      </Box>

      <Box sx={rightBoxStyles}>
        <Typography variant="body1" sx={textStyles}>
          We are here<br />to help!
        </Typography>

        <Button variant="contained" sx={buttonStyles}>
          Contact us
        </Button>
      </Box>
    </Box>
  );
}
