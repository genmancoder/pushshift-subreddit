
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


import Submissions from './Submissions';

const Feed = () => {
  return (
    <Box flex={4}>
        <Submissions/>
        <Submissions/>
        <Submissions/>
    </Box>
  )
}

export default Feed