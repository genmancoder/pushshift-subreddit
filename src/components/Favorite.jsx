import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const Favorite = () => {
  return (
    <Box flex={4} padding={2}>
    <Typography variant="h6" color="text.secondary">
      Reddit API Service
    </Typography>
    <Button variant="contained">Fetch Data</Button>
</Box>
  )
}

export default Favorite