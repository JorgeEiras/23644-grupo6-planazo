
import React, { useState, useEffect } from 'react'
import Travel from '../../components/Travel';


export const resultadosLugaresContext = React.createContext();


const Apiplaces = ({ searchTerm }) => {
  const [search, setSearch] = useState("ciudades de argentina");
  const [dataDetails, setDataDetails] = useState([]);
  const apiKey = process.env.REACT_APP_API_PLACES_KEY;

  useEffect(()=>{
    getPlaces();
  }, [searchTerm]);

  async function getPlaces() {
    if (searchTerm) setSearch(searchTerm);
    const responsePlaces = await fetch(`https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${apiKey}`);
    const dataPlaces = await responsePlaces.json();
    console.log(dataPlaces.results);

    setDataDetails(await Promise.all(dataPlaces.results.map(async (resultDetails) => {
      const responseDetails = await fetch(`https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/details/json?placeid=${resultDetails.place_id}&key=${apiKey}`);
      return await responseDetails.json();
    })));
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
      {/* {loading ? (
        <p>Cargando...</p>
      ) : ( */}
      {
        <div className='container-fluid'>
          {dataDetails.length > 0 ? (
              <div className='row row-cols-auto g-4 centered'>
                
                {dataDetails.map((filteredTravel) => (
                  <resultadosLugaresContext.Provider value={filteredTravel}>
                    <div className='col' key={filteredTravel.post_id}>
                    <Travel/>
                    </div>
                  </resultadosLugaresContext.Provider>
                ))}
                
            </div>
          ) : (
            <p>No se encontraron resultados. Intentá con otro lugar!</p>
          )}
        </div>
      }
    
    </section>
  )
}

export default Apiplaces