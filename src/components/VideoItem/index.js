import { Video } from './styles'

const VideoItem = ({ id }) => {
  return (
    <Video
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${id.videoId}`}
      title='YouTube video player'
      frameborder='0'
      id={id}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    ></Video>
  )
}

export default VideoItem
