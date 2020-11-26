import React, { useState, useEffect } from 'react';

const dataContext = React.createContext();

const DataProvider = (props) => {

  const [userID, setUserID] = useState("2");
  const [nombre, setNombre] = useState("");


  const [nuevoCultivo, setNuevoCultivo] = useState([])

  const [cultivos, setCultivos] = useState([
    /*
    {
      
      titulo: "Bacterias 1",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "0.1",
      uri de imagen or something: "djfksdjfhksdjfhk",
    },
    //La Key tiene que ser diferente entre todos los cultivos, averiguar forma de hacer que se agreguen siempre con Key nueva.
    {
      titulo: "Bacterias 2",
      fecha: "1-2-2003",
      colonias: "99",
      notas: "lorem ipsum",
      key: "0.2",
    },
    {
      titulo: "Bacterias 3",
      fecha: "1-2-2003",
      colonias: "23",
      notas: "lorem ipsum",
      key: "0.3",
    },*/
  ]);

  /*setFoodFromUrl = async () => {
    const result = await fetch('https://api.openbrewerydb.org/breweries/5494')
    const brewery = await result.json()
    console.log(brewery.name);
  }
 
  useEffect(() => {
    console.log("useEffect called");
    setFoodFromUrl();
  })*/

  const addCultivo = (cultivo) => {
    keyCountUp();
    cultivo.key = keyCount.toString(); //Math.random().toString(); jaja antes era rancio
    setCultivos((cultivosActuales) => {
      return [cultivo, ...cultivosActuales];
    });
  };

  const deleteHim = (key) => {
    console.log("arrivederci");
    setCultivos((prevCultivos) => {
      return prevCultivos.filter((cultivo) => cultivo.key != key);
    });
  };

  const [keyCount, setKeyCount] = useState(0);
  const keyCountUp = () => setKeyCount((prevKeyCount) => prevKeyCount + 1);





  return (
    <dataContext.Provider
      value={{
        userID,
        setUserID,

        nombre,
        setNombre,

        cultivos,
        setCultivos,
        addCultivo,
        deleteHim,

        nuevoCultivo,
        setNuevoCultivo,

        keyCount,
        setKeyCount,
        keyCountUp

      }}>
      {props.children}
    </dataContext.Provider>
  )
}

export { DataProvider, dataContext };