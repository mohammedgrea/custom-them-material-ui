import { useTheme } from "@emotion/react";
import { Box, InputBase } from "@mui/material";
import React from "react";

export default function Topbar() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box display="flex" justifyContent="space-between" bgcolor="grey" p={2}>
      <InputBase placeholder="Seach" sx={{ ml: 2, bgcolor: "blue" }} />
      <Box bgcolor="blue">2</Box>
    </Box>
  );
}
