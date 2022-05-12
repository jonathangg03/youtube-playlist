import { useContext } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Container,
  Title,
  PlayListContainer,
  DndMessage,
  CardContainer,
  CardContent,
  DndIcon,
  CardImage
} from './styles'
import videosContext from '../../Context/videosContext'
import dnd from '../../../public/dnd.png'

const PlayList = ({ dragging }) => {
  const { store } = useContext(videosContext)

  return (
    <Container>
      <Title>Playlist:</Title>
      <Droppable droppableId='playlist'>
        {(provided) => {
          return (
            <PlayListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              dragging={dragging}
            >
              {store.playlistVideos.length === 0 && (
                <DndMessage>
                  Arrastra hasta aquí los videos para agregarlos a la playlist
                </DndMessage>
              )}
              {store.playlistVideos.map((item, index) => {
                return (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => {
                      return (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
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
                        </li>
                      )
                    }}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </PlayListContainer>
          )
        }}
      </Droppable>
    </Container>
  )
}

export default PlayList
