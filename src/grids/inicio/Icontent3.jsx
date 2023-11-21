import React, { useEffect, useState } from 'react'
// import axios from 'axios';

const Content3 = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    getLugares();
  }, [] );
  
  // getLugares usando FETCH y GEOAPIFY:
  async function getLugares() {
    let requestOptions = { method: 'GET' };
    
    const response = await fetch("https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:511a301b253c4f4dc0597861f84b255541c0f00101f9018fbd1e0000000000c002069203064d6f72c3b36e&limit=20&apiKey=43ed30b46e994340bdd785ec8badf0f7", requestOptions);
      const data = await response.json(); 
      setData(data.features);
      console.log({ data });
  }

  return (
    <main className='d-flex' style={{width: "100%", textAlign:"center"}}>

      <div className='d-flex flex-wrap align-items-start centered'>
        { data.map((lugar) => (
            <div className="card" style={{width: "18rem", margin: "1rem"}}>
              <img className="card-img-top" src="./imagenes/avion-card.jpeg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{ lugar.properties.name }</h5>
                <p className="card-text">{ lugar.properties.address_line2 }</p>
                <a href="#" className="btn btn-primary">Visitar</a>
              </div>  
            </div>
          ))
        }  
      </div>

    </main>
  )
}

export default Content3