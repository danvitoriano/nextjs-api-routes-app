import { useRouter } from 'next/router'
import useSWR from 'swr'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'reactstrap'
import Link from 'next/link'

const fetcher = async (url) => { 
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Image() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/image/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Carregando ...</div>

  return (
      <div class="row paddingTop"> 
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <center>
            <h5>Fotos {data.name}</h5>
          </center>
        
          <div class="text-center col-xs-12 row">
            {data.listFoto.map(repo => (
               <div class="text-center col-xs-4">
                  <Card style={{ width: '18rem' }}>
                    <img src={repo} class="rounded" width="304" height="236"/>
                  </Card> 
                </div>
            ))}  
            <Link href="../">
              <button class="btn btn-primary marginTop15 float-left">Voltar</button>
            </Link>
          </div>     

        </div>
        <div class="col-md-2"></div>
      </div>
  )
}
