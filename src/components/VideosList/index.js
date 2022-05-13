import { useContext } from 'react'
import videosContext from '../../Context/videosContext'
import VideoItem from '../VideoItem'
import { VideoList, Title, Container } from './styles'
import LoadMoreButton from '../LoadMoreButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const VideosList = () => {
  const { store } = useContext(videosContext)

  return (
    <Container>
      <Title>Resultados de busqueda:</Title>
      <Droppable droppableId='videos'>
        {(provided) => {
          return (
            <VideoList {...provided.droppableProps} ref={provided.innerRef}>
              {store.findedVideos.map((item, index) => {
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
      <LoadMoreButton>Cargar más</LoadMoreButton>
    </Container>
  )
}

export default VideosList
