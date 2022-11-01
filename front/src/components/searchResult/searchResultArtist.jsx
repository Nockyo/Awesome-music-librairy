import React from "react"
import { useEffect } from "react";

export const SearchResultArtist = (props) => {
    const {results} = props;

    useEffect(() => {
        console.log(results)
    }, [])
    
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

// Créer un composant Artiste
// Créer un composant Album
// Créer un composant Track
// Créer un composant Playlist