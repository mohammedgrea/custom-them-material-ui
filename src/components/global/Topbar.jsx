import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useContext } from "react";
import { ColorThemContext } from "../../../theme";
import { SearchOutlined } from "@mui/icons-material";

export default function Topbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorThemContext);
  console.log(theme.palette.primary);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        alignItems="center"
        bgcolor={theme.palette.main.primary}
        borderRadius={1}
        sx={{ pl: 2, pr: 2 }}
      >
        <InputBase placeholder="Seach" />
        <SearchOutlined />
      </Box>

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
