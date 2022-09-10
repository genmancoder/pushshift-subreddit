import { Box, Typography,Button } from '@mui/material'
import {useState, useEffect} from 'react'

import Loader from "react-js-loader";

const Service = () => {

    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts?_limit=10`
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            console.log(data)
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
      }, [])

    const handleClick = () => {
        console.log('Clicked');
    }

  return (    
    <Box flex={4} padding={2}>
        <Typography variant="h6" color="text.secondary">
          Reddit API Service
        </Typography>

        <Button variant="contained" onClick={handleClick}>Fetch Data</Button>

        <div>
        { loading && 
            <Loader type="bubble-loop" bgColor={"gray"} title={"bubble-loop"} color={'#FFFFFF'} size={100} />
        }
        {
            data?.length > 0 && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>test</li>
                    ))}
                </ul>    
            )
            
        }
        </div>
    </Box>
  )
}

export default Service