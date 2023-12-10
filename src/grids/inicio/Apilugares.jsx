
import React, { useState, useEffect } from 'react'
import Travel from '../../components/Travel';


export const resultadosLugaresContext = React.createContext();


const Apilugares = ({ searchTerm }) => {
  const [search, setSearch] = useState("ciudades de argentina");
  const [dataDetails, setDataDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  // Key de la API guardada en variable de entorno, usa archivo .env en raiz del proyecto
  const apiKey = process.env.REACT_APP_API_PLACES_KEY;

  useEffect(()=>{
    getPlaces();
  }, [search]);

  useEffect(()=>{
    if (searchTerm) setSearch(searchTerm);
  }, [searchTerm]);

  async function getPlaces() {
    setLoading(true);

    // Busca lugares en la api y obtiene place_id
    const responsePlaces = await fetch(`https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${apiKey}`);
    const dataPlaces = await responsePlaces.json();

    if (dataPlaces.results.length > 0) {
      // Con el place_id busca los detalles de cada lugar
      setDataDetails(await Promise.all(dataPlaces.results.map(async (resultDetails) => {
        const responseDetails = await fetch(`https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/details/json?placeid=${resultDetails.place_id}&key=${apiKey}`);
        return await responseDetails.json();
      })));
    } else  if (search !== "ciudades de argentina") setDataDetails([]);
    setLoading(false);
    console.log(dataPlaces);
    console.log(dataPlaces.results);
    console.log(dataDetails);
}


  //Agregue la funcion para filtrar los resultados ya que no los traia sin filtro.
  // const filterByProvince= (provinceName)=>{
  //   return data.filter((travel)=>
  //   travel.province.toLowerCase() === provinceName.toLowerCase()
  //   );
  // };

  //Resultados filtrados
  // const filteredResults = searchTerm ? filterByProvince(searchTerm) : data;

  return (
    <section>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='container-fluid'>
          {dataDetails.length > 0 ? (
              <div className='row row-cols-auto g-4 centered'>
                
                {dataDetails.map((filteredTravel) => (
                  <resultadosLugaresContext.Provider value={filteredTravel}>
                    <div className='col' key={filteredTravel.result.place_id}>
                      <Travel/>
                    </div>
                  </resultadosLugaresContext.Provider>
                ))}
                
            </div>
          ) : (
            <p>No se encontraron resultados. Intentá con otro lugar!</p>
          )}
        </div>
      )}
    </section>
  )
}

export default Apilugares