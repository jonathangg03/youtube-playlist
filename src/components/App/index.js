import { useContext } from 'react'
import VideosList from '../VideosList'
import PlayList from '../Playlist'
import SearchContext from '../../Context/searchContext'
import { Title } from './styles'
import SearchForm from '../SearchForm'
import getVideos from '../../services/getVideos'
import { Button } from '../SearchForm/styles'

const App = () => {
  const { items, setSearch, search, setItems } = useContext(SearchContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    const results = await getVideos({
      q: search.query,
      maxResults: search.maxResults,
      pageToken: search.nextPageToken
    })

    setItems((prev) => prev.concat(results.items))
    setSearch({ ...search, nextPageToken: results.nextPageToken })
  }

  return (
    <>
      <Title>YouTube Playlist Creator</Title>
      <SearchForm />
      <VideosList items={items} />
      {items.length && <Button onClick={handleSearch}>Cargar más</Button>}
      <PlayList></PlayList>
    </>
  )
}

export default App
