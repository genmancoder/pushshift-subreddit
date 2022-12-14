import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ShareIcon from '@mui/icons-material/Share';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { red } from '@mui/material/colors';

import { Facebook } from 'react-content-loader'

import FavoriteContext from '../FavoriteContext'
import {useContext} from 'react'


const Submissions = ({id,sid,author,title,content,link}) => {

const {addToFavorite} = useContext(FavoriteContext)

// const checkFavorite = (sid) => {

//   favorites.forEach((fav) => {
//     console.log('fav id => ' + fav.id, ' clicked ' + sid)
//     if(fav.id === id){
//       return 'checked'
//     }
//   })

//   return ''
// }

let nameholder = author?.substr(0,1).toUpperCase()
const propsValid = (author) => author !== undefined

  return (
    <>
    {
      propsValid === false ? <Facebook/> :
      <Card   sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {nameholder}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`by ${author}`}
      />      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=> addToFavorite(id,title,content,link)}>
          <Checkbox            
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>        
        <IconButton aria-label="open" LinkComponent='a' target='_blank' href={link}>
          <OpenInNewIcon />
        </IconButton>  
      </CardActions>
      
    </Card>
    
    }
    </>
  )
}

export default Submissions