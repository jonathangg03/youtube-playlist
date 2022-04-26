import { useContext } from 'react'
import VideosList from '../VideosList'
import SearchContext from '../../Context/searchContext'
import { Title } from './styles'
import SearchForm from '../SearchForm'

const App = () => {
  const { items } = useContext(SearchContext)

  return (
    <>
      <Title>YouTube Playlist Creator</Title>
      <SearchForm />
      <VideosList items={items} />
    </>
  )
}

export default App
