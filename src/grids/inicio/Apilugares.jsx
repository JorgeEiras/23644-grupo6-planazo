
import React, { useState, useEffect } from 'react'
import { useFetch } from "./useFetch";
import Travel from '../../components/Travel';

const Apilugares = ({ searchTerm }) => {

  const [url, setUrl] = useState("https://punctualturbodeletion--jeiras2020.repl.co/products/");

  useEffect(() => {
    if (searchTerm) {
      setUrl(`https://punctualturbodeletion--jeiras2020.repl.co/products/?search=${searchTerm}`);

    } else {
      setUrl("https://punctualturbodeletion--jeiras2020.repl.co/products/");
    }
    console.log("Soy content3", searchTerm);
  }, [searchTerm]);


  const { data, loading } = useFetch(url);
  

  return (
    <main>
      <h1>Lugares API</h1>

      <div className='container-fluid'>
        <div className='row'>
          {loading && <li>Loading...</li>}
          {data?.map((travel) => (
            <div className='col-md-4' key={travel.post_id}>
              <Travel travel={travel} />
            </div>
          ))}
        </div>
      </div>
    
    </main>
  )
}

export default Apilugares