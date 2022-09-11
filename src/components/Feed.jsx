
import {useState, useEffect} from 'react'
import { Box } from '@mui/material'


import { Facebook } from 'react-content-loader'

import Submissions from './Submissions';



const Feed = () => {

    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [setError] = useState(null)

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch(
            `/submissions`
          );
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          setData(actualData);          
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

  return (
    <Box flex={4}>
        {
          loading === true ? <Box margin={5}><Facebook /></Box> :
          data?.map((item) => (
            <Submissions key={item.id} id={item.id} sid={item.subid} title={item.title} author={item.name} content={item.content} votes={item.upvotes} link={item.link}/>
          ))
        }
        
        
    </Box>
  )
}

export default Feed