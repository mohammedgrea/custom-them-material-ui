import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useContext } from "react";
import { ColorThemContext } from "../../../theme";

export default function Topbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorThemContext);
  console.log(colorMode);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <InputBase placeholder="Seach" sx={{ ml: 2 }} />

      <Box display="flex">
        <IconButton onClick={colorMode.toggelColorMode}>
          {theme.mode === "dark" ? (
            <WbSunnyOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
