import React from 'react'
import { useFetch } from "./useFetch";
import Travel from '../../components/Travel';


const Content3 = () => {
  const { data, loading } = useFetch(
    "https://punctualturbodeletion--jeiras2020.repl.co/products/"
    );

  return (
    <main>
      <div className='container-fluid'>
        <div className='row'>
          {loading && <li>Loading...</li>}
          {data?.map((travel) => (
            <div className='col-md-4' key={travel.post_id}>
            <Travel travel = {travel} />
          </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Content3

//<li key={user.post_id}>{user.name}</li>