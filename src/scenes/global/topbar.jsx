import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colourModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "@emotion/styled";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colourModeContext);
  const styledBox = styled(Box);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <styledBox
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      ></styledBox>
      <InputBase sx = {{ml:2, flex: 1}} placeholder = "Search"/>
      <IconButton type="button" sx={{p:1}}>
        <SearchOutlinedIcon/>
      </IconButton>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark'?(
            <DarkModeOutlinedIcon/>
       ) : (
        <LightModeOutlinedIcon/>
       ) }
           
        </IconButton>
        <IconButton>
            <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon/>
        </IconButton>
        </Box>
    </Box>

   
  );
};

export default Topbar;