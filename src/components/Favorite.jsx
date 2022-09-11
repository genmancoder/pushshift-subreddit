import { Box, Typography} from '@mui/material'
import React from 'react'

import FavoriteContext from '../FavoriteContext'
import {useContext} from 'react'
import Submissions from './Submissions'
import FavoriteSubs from './FavoriteSubs'

const Favorite = () => {

  const {favorites} = useContext(FavoriteContext)

  return (
    <Box flex={4} padding={2}>
     <Typography variant="h5" color="text.secondary">          
         Favorite Section
      </Typography>
        {          
          favorites?.map((item) => (
            <FavoriteSubs key={item.id} id={item.id} sid={item.subid} title={item.title} author={item.name} content={item.content} votes={item.upvotes} link={item.link}/>
          ))
        }

    
    </Box>
  )
}

export default Favorite