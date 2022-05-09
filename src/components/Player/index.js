import { Container, Title, Video } from './styles'

const Player = ({ playlistVideos }) => {
  return (
    <Container>
      <Title>Reproductor:</Title>
      <Video
        src={`https://www.youtube.com/embed?playlist=${playlistVideos}&`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></Video>
    </Container>
  )
}

export default Player
