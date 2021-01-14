import React, { useContext, useState } from 'react';

const NominationsContext = React.createContext();

export const useNominations = () => {
    return useContext(NominationsContext)
};

export const NominationsProvider = ({children}) => {
    const [noms, setNoms] = useState([])
    
    //checks length of nomination list before allowing to nominate a film
    const nominateFilm = (info) => {
        if(noms.length >= 0 && noms.length < 5){
            setNoms(prev => {return [...prev, info]})
          } else {
            return
          }
    }
    
    const deleteFilm = (id) => {
        const a = noms.filter(n => {return n.imdbID !== id})
        setNoms(a)
    }

    const value = {
        noms,
        nominateFilm,
        deleteFilm
    }
    return (
        <NominationsContext.Provider value={value}>
            {children}
        </NominationsContext.Provider>
    )
};


