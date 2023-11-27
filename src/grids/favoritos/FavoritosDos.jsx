import React from 'react'

const FavoritosDos = () => {
  return (
    <div className='favoritosDosContainer'>
      <h2>Favoritos 2</h2>
    </div>
  )
}

export default FavoritosDos

// import React, { useState, useEffect } from 'react'
// import { useFetch } from "./useFetch";
// import Travel from '../../components/Travel';
// //import Content2 from './Content2';

// const Content3 = ({ searchTerm }) => {

//   const [url, setUrl] = useState("https://punctualturbodeletion--jeiras2020.repl.co/products/");

//   useEffect(() => {
//     if (searchTerm) {
//       setUrl(`https://punctualturbodeletion--jeiras2020.repl.co/products/?search=${searchTerm}`);

//     } else {
//       setUrl("https://punctualturbodeletion--jeiras2020.repl.co/products/");
//     }
//     console.log("Soy content3", searchTerm);
//   }, [searchTerm]);


//   const { data, loading } = useFetch(url);


//   return (
//     <main>
//       <div className='container-fluid'>
//         <div className='row'>
//           {loading && <li>Loading...</li>}
//           {data?.map((travel) => (
//             <div className='col-md-4' key={travel.post_id}>
//               <Travel travel={travel} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Content3

//<li key={user.post_id}>{user.name}</li>


