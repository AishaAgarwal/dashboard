import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.primary[400],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
const Side = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner" : {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover":{
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-menu-item-active": {
                    background: `${colors.primary[400]} !important`
                },
            }}
        >
             <Sidebar collapsed={isCollapsed}>
             <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.primary[900],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}
                style= {{color: colors.primary[900]}}>
                  <MenuOutlinedIcon />
                
                </IconButton>
              </Box>
            )}
          </MenuItem>
             <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Geography"
              to="/geography"
              icon={<TerrainOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
            <Item
              title="Map"
              to="/map"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Tend"
              to="/trend"
              icon={<TrendingUpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
            <Item
              title="Topic Analysis"
              to="/topic"
              icon={<TopicOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Bubble Chart"
              to="/bubble"
              icon={<BubbleChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Stacked Bar Chart"
              to="/stac"
              icon={<StackedBarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
          </Box>
          </Menu>
       
     
             </Sidebar>

        </Box>
      );
}
export default Side;