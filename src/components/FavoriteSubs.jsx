import { Avatar, Card, CardHeader} from '@mui/material'

import { red } from '@mui/material/colors';


const FavoriteSubs = (props) => {

    const {title} = props    
    
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