import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { red } from '@mui/material/colors';

import ContentLoader, { Facebook } from 'react-content-loader'

import FavoriteContext from '../FavoriteContext'
import {useContext} from 'react'

const FavoriteSubs = (props) => {
    const {id,author, title, link} = props
    let nameholder ='test'

  return (
    <Card   sx={{ margin: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
       
        title={title}
        
      />
      
      
    </Card>
  )
}

export default FavoriteSubs