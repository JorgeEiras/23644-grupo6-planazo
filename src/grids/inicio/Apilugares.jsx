import React, { useState, useEffect } from 'react'
import { useFetch } from "./useFetch";
import Travel from '../../components/Travel';


export const resultadosLugaresContext = React.createContext();


const Apilugares = ({ searchTerm }) => {

  const [url, setUrl] = useState("https://punctualturbodeletion--jeiras2020.repl.co/products/");
  const { data, loading } = useFetch(url);
  
  useEffect(() => {
    if (searchTerm) {
      setUrl(`https://punctualturbodeletion--jeiras2020.repl.co/products/?search=${searchTerm}`);

    } else {
      setUrl("https://punctualturbodeletion--jeiras2020.repl.co/products/");
    }
   
  }, [searchTerm]);

  //Agregue la funcion para filtrar los resultados ya que no los traia sin filtro.
  const filterByProvince= (provinceName)=>{
    return data.filter((travel)=>
    travel.province.toLowerCase() === provinceName.toLowerCase()
    );
  };

  //Resultados filtrados
  const filteredResults = searchTerm ? filterByProvince(searchTerm) : data;

  return (
    <section>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='container-fluid'>
          {filteredResults.length > 0 ? (
              <div className='row row-cols-auto g-4 centered'>
                
                {filteredResults.map((filteredTravel) => (
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
      )}
    
    </section>
  )
}

export default Apilugares