import {
  CardImage,
  CardContainer,
  CardContent,
  CardTitle,
  CardDescription
} from './styles'

const VideoItem = ({ id, snippet }) => {
  return (
    <CardContainer>
      <CardImage
        src={snippet.thumbnails.medium.url}
        id={id.videoId}
      ></CardImage>
      <CardContent>
        <CardTitle>{snippet.title}</CardTitle>
        <CardDescription>{snippet.description}</CardDescription>
      </CardContent>
    </CardContainer>
  )
}

export default VideoItem
