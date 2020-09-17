import { useRouter } from 'next/router'
import useSWR from 'swr'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Link from 'next/link'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/people/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>        
        <div class="row paddingTop"> 
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Mass</th>
                  <th>Hair color</th>
                  <th>Skin color</th>
                  <th>Eye color</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.height}</td>
                  <td>{data.mass}</td>
                  <td>{data.hair_color}</td>
                  <td>{data.skin_color}</td>
                  <td>{data.eye_color}</td>
                  <td>{data.gender}</td>
                </tr>
              </tbody>  
            </table>
            <Link href="../">
                <button class="btn btn-primary marginTop15 float-left">Voltar</button>
            </Link>  
          </div>
          <div class="col-md-2"></div>
      </div>  
    </div>
  )
}
