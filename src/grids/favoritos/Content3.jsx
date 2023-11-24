import React from 'react'
import { useFetch } from "./useFetch";


const Content3 = () => {
  const { data, loading } = useFetch(
    "https://punctualturbodeletion--jeiras2020.repl.co/products/"
    );

  return (
    <main>
      <h1>Lugares API te hije</h1>
      <div className="card">
        <ul>
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.post_id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Content3