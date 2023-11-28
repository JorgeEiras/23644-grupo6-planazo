
import React, { useState, useEffect } from 'react'
import { useFetch } from "./useFetch";
import Travel from '../../components/Travel';

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
    <main>
        <h1>Lugares API</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='container-fluid'>
          {filteredResults.length > 0 ? (
            <div className='row'>
              {filteredResults.map((filteredTravel) => (
                <div className='col-md-4' key={filteredTravel.post_id}>
                  <Travel travel={filteredTravel} />
                </div>
              ))}
            </div>
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      )}
    
    </main>
  )
}

export default Apilugares