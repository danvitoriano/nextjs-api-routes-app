import swapi from 'swapi-node'

export default function filmHandler({ query: { id } }, res) {
  swapi.getFilm(id).then(
    result => {
      res.status(200).json(result);
    }
  ).catch(err => { console.error(err); res.status(500).json(err); });

}
