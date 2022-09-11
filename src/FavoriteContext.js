import { SettingsSystemDaydreamSharp } from "@mui/icons-material";
import { createContext, useState } from "react";

const FavoriteContext = createContext()

const db = localStorage.getItem('faves')
const storedNotes = db ? JSON.parse(db) : [];

// console.log('notes ', storedNotes)

export function FavoriteProvider({children}){


    const [favorites, setFavorites] = useState(storedNotes);
    
    

    const addToFavorite = (id, title, content,link) => {
         
        if(favorites === null){
           
            setFavorites((prevState) => 
                [...prevState,{id,title,content,link}]
             )

             const nstate = [...favorites, {id,title,content,link}]
             localStorage.setItem('faves', JSON.stringify(nstate))

        }else{

          
            let value = favorites.find((fav) => {
                return fav.id === id
            })

            if(value === undefined || value === null){
                const nstate = [...favorites, {id,title,content,link}]
                localStorage.setItem('faves', JSON.stringify(nstate))
    
                setFavorites((prevState) => 
                    [...prevState,{id,title,content,link}]
                 )
            }
        }
        
    }

    return(
        <FavoriteContext.Provider value={{favorites, addToFavorite}}>{children}</FavoriteContext.Provider>
    )
}

export default FavoriteContext;