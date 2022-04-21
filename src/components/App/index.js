import { Title } from './styles'
import SearchForm from '../SearchForm'

const App = () => {
  return (
    <>
      <Title>YouTube Playlist Creator</Title>
      <SearchForm />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/DXUAyRRkI6k'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </>
  )
}

export default App
