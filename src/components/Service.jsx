import { Box, Typography,Button } from '@mui/material'
// import {useState} from 'react'

const Service = () => {

    // const [data, setData] = useState(null)
    // const [setLoading] = useState(true)
    // const [setError] = useState(null)

    // useEffect(() => {
    //     const getData = async () => {
    //       try {
    //         const response = await fetch(
    //           `https://jsonplaceholder.typicode.com/posts?_limit=10`
    //         );
    //         if (!response.ok) {
    //           throw new Error(
    //             `This is an HTTP error: The status is ${response.status}`
    //           );
    //         }
    //         let actualData = await response.json();
    //         setData(actualData);
    //         console.log(data)
    //         setError(null);
    //       } catch(err) {
    //         setError(err.message);
    //         setData(null);
    //       } finally {
    //         setLoading(false);
    //       }  
    //     }
    //     getData()
    //   }, [data])

    const handleClick = () => {
        console.log('Clicked');
    }

  return (    
    <Box flex={4} padding={2}>
        <Typography variant="h6" color="text.secondary" margin={1}> 
          Reddit API Service
        </Typography>

        <Button variant="contained" onClick={handleClick}>Fetch Data</Button>

        <div>
            <Typography variant='body1' padding={6}>
                Reddit pushshift api service has been implemented using NodeJS.
            </Typography>
        </div>
    </Box>
  )
}

export default Service