import dnd from '../../../public/dnd.png'
import { CardContainer, CardContent, DndIcon, CardImage } from './styles'

const PlaylistCard = ({ item }) => {
  return (
    <CardContainer>
      <CardImage
        src={`https://www.youtube.com/embed/${item}`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></CardImage>
      <CardContent>
        <DndIcon src={dnd} />
      </CardContent>
    </CardContainer>
  )
}

export default PlaylistCard
