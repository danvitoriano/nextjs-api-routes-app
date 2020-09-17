
import useSWR from 'swr'
import Image from '../components/images/Image'
import Cabecalho from '../components/images/Cabecalho';
import SetName from '../components/images/SetName';
import PersonList from '../components/PersonList'

import styles from '../styles.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/image', fetcher)
  if (!data) return <div>Loading Image...</div>
  if (error) return <div>Failed to load Image</div>

  return (   
    <div>        
        <div class="row paddingTop"> 
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <Cabecalho/>         
          
            <SetName/>
            
            <h6 class="marginTop15">Selecione uma categoria de fotos:</h6>

            <div class="list-group">
              {data.map((p, i) => (
                <Image key={i} image={p} />
              ))}
            </div>

            <PersonList/>
          </div>
          <div class="col-md-2"></div>
      </div>  
    </div>
  )
}
