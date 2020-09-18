import { CssBaseline } from '@material-ui/core';
import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR('/api/peoples', fetcher);

  console.log('data', data);

  if (error) return (<div>Failed to load </div>)
  if (!data) return (<div>Loading...</div>)

  return (
    <ul>
      <CssBaseline />
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}
