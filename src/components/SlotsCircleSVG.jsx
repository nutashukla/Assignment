import React from "react";
import { Box } from "@mui/material";

export default function SlotsCircleSVG() {
  return (
    <Box
      sx={{
        width: 220,
        height: 220,
        position: "relative",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 240 240">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5a2e91" />
            <stop offset="100%" stopColor="#1e1b52" />
          </radialGradient>

          <path
            id="textCircle"
            d="
              M 120,40
              a 80,80 0 0,1 0,160
            "
            fill="none"
          />
        </defs>
        <circle cx="120" cy="120" r="100" fill="url(#grad1)" />
        <text
          fill="#f5e6d8"
          fontSize="20"
          fontWeight="bold"
          letterSpacing="1"
        >
          <textPath
            href="#textCircle"
            startOffset="50%"
            textAnchor="middle"
          >
            ONLY 6 SLOTS LEFT
          </textPath>
        </text>
      </svg>
    </Box>
  );
}
