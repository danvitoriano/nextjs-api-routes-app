import useSWR from 'swr'
import Person from '../components/Person'
import Tabs from "../components/Tabs/Tabs"
import Header from "../components/Navbar/Navbar"
import Sobre from "./sobre"
import Enredo from "./enredo"

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import "../styles.module.css"
import "../static/style.css"


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Header></Header>

     <Tabs> 
       <div label="Sobre"> 
         <Sobre></Sobre>
         
       </div> 
       <div label="Enredo"> 
          <Enredo></Enredo>
       </div> 
       <div label="Personagens"> 
       <ul>
          {data.map((p, i) => (
            <Person key={i} person={p} />
          ))}
        </ul>
       </div> 
     </Tabs> 
    </div>
  );
  // return (
  //   <ul>
  //     {data.map((p, i) => (
  //       <Person key={i} person={p} />
  //     ))}
  //     <Button></Button>
  //   </ul>
  // )
}
