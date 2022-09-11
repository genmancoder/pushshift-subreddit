

import {Stack, Box} from '@mui/material'
import './App.css';

import NavBar from './components/NavBar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'


import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Service from './components/Service';
// import GlobalSettings from './components/GlobalSettings';
import Favorite from './components/Favorite';

import {FavoriteProvider} from './FavoriteContext'

// const useStyles = makeStyles((theme) => ({
//   button:{
//     color: 'white',
//     backgroundColor: theme.palette.primary.main,
//   }
// }))

function App() {
  // const classes = useStyles();
  return (
    <BrowserRouter>
      <FavoriteProvider>
      <Box>
          <NavBar />
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar/>
              <Routes>  
                <Route path="/" element={<Feed/>}/>       
                <Route path="/service" element={<Service/>} />
                <Route path="/favorite" element={<Favorite/>} />              
              </Routes>         
            <Rightbar/>
          </Stack>
      </Box>
      </FavoriteProvider>
    </BrowserRouter> 
  );
}

export default App;
