import { Video } from './styles'

const VideoItem = ({ id, snippet }) => {
  return <Video src={snippet.thumbnails.default.url} id={id.videoId}></Video>
}

export default VideoItem
