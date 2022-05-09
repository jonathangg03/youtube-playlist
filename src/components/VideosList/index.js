import VideoItem from '../VideoItem'
import { VideoList, Title, Container } from './styles'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const VideosList = ({ items }) => {
  return (
    <Container>
      <Title>Resultados de busqueda:</Title>
      <Droppable droppableId='videos'>
        {(provided) => {
          return (
            <VideoList {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => {
                return (
                  <Draggable
                    key={item.id.videoId}
                    draggableId={item.id.videoId}
                    index={index}
                    cas={item}
                  >
                    {(provided) => {
                      return (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <VideoItem {...item} />
                        </li>
                      )
                    }}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </VideoList>
          )
        }}
      </Droppable>
    </Container>
  )
}

export default VideosList