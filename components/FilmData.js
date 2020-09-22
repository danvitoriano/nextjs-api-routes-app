import Data from "./Data";

export default function FilmData({ data }) {
  return (
    <div>
    <Data label="Title" value={data.title}/>
    <Data label="Director" value={data.director}/>
    <Data label="Episode" value={data.episode_id}/>
    <Data label="Opening Crawl" value={data.opening_crawl}/>
    <Data label="Producer" value={data.producer}/>
    <Data label="Created" value={data.created}/>
    <Data label="Edited" value={data.edited}/>
    <Data label="Release Date" value={data.release_date}/>
  </div>
  )
}
