//import { people } from '../../../data'
import swapi from 'swapi-node'

// https://www.npmjs.com/package/swapi-node
export default function handler({ query: { id } }, res) {
  swapi.getPerson(id).then(
    result => {
      const results = result.results.map(p->{});
      res.status(200).json(results);
    }
    ).catch(err => { console.error(err); res.status(500).json(err); });
    //res.status(200).json(people)
}
