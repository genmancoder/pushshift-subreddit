import { Box, Switch} from '@mui/material'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home, ModeNight } from '@mui/icons-material';

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block" }}} >
        <Box position="fixed">
        <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/service'>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  component={Link} to='/favorite'>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
        </nav>
        </Box>
    </Box>
  )
}

export default Sidebar