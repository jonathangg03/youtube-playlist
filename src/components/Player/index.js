import { useContext } from 'react'
import videosContext from '../../Context/videosContext'
import { Container, Title, Video } from './styles'

const Player = () => {
  const { store } = useContext(videosContext)
  return (
    <Container>
      <Title>Reproductor:</Title>
      <Video
        src={`https://www.youtube.com/embed?playlist=${store.playlistVideos}&`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></Video>
    </Container>
  )
}

export default Player
