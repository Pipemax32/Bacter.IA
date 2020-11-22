import React, { useState, useEffect } from 'react';

const dataContext = React.createContext();

const DataProvider = (props) => {

    const [userID, setUserID] = useState("2");
    const [nombre, setNombre] = useState("");

    /*setFoodFromUrl = async () => {
      const result = await fetch('https://api.openbrewerydb.org/breweries/5494')
      const brewery = await result.json()
      console.log(brewery.name);
    }
  
    useEffect(() => {
      console.log("useEffect called");
      setFoodFromUrl();
    })*/

    return (
        <dataContext.Provider
            value={{
                userID,
                setUserID,

                nombre,
                setNombre
            }}>
            {props.children}
        </dataContext.Provider>
    )
}

export { DataProvider, dataContext };