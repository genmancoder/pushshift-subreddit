import { Avatar,
  Link, 
  Box, 
  Typography,
  ImageList,
  ImageListItem, 
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'

import ExpandMoreIcon  from '@mui/icons-material/ExpandMore'

import FavoriteContext from '../FavoriteContext'
import {useContext} from 'react'

import { Facebook } from 'react-content-loader'

const Rightbar = () => {
  
  const {favorites} = useContext(FavoriteContext)
  

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Favorite Submissions ( {favorites?.length})
        </Typography>
          <Box padding={3}>
          {
            
            !favorites  ? <Box margin={5}><Facebook /></Box> :
            favorites.map((item) => (

              <Accordion key={item.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.content.substr(0,50)}...
                  </Typography>
                  <Link target="_blank" href={item.link}>Read more...</Link>
                </AccordionDetails>
              </Accordion>

            ))
          }           
        
          </Box>
          
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>        
        
        </Box>
    </Box>
  )
}

export default Rightbar

