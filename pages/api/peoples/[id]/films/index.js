//import { people } from '../../../data'
import swapi from 'swapi-node'
import { getId } from '../../../util'

export default function filmsHandler({ query: { id } }, res) {
  swapi.getPerson(id).then(result => {
    console.log('filmes', result.films);

    const results = [];
    result.results.films.map(f => {
      swapi.get(f.url).then(r => results.push(r);
    })
    res.status(200).json(results);
  }
  ).catch(err => { console.error(err); res.status(500).json(err); });
  // const filtered = people.filter((p) => p.id === id)
  
  // // User with id exists
  // if (filtered.length > 0) {
  //   res.status(200).json(filtered[0])
  // } else {
  //   res.status(404).json({ message: `User with id: ${id} not found.` })
  // }
}
