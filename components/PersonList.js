
import useSWR from 'swr'
import Person from '../components/Person'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PersonList({ personList }) {
  const { data, error } = useSWR('/api/people', fetcher)
  if (!data) return <div>Loading People...</div>
  if (error) return <div>Failed to load People</div>

  return (
    <div>
      <h6 class="marginTop15">Selecione uma pessoa:</h6>

      <div class="list-group">
          {data.map((p, i) => (
            <Person key={i} person={p} />
          ))}
      </div>
    </div>
  )
}
