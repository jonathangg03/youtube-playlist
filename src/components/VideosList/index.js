import VideoItem from '../VideoItem'
import { VideoList } from './styles'

const VideosList = ({ items }) => {
  return (
    <VideoList>
      {items.map((item) => {
        return (
          <li key={item.id.videoId}>
            <VideoItem {...item} />
          </li>
        )
      })}
    </VideoList>
  )
}

export default VideosList
