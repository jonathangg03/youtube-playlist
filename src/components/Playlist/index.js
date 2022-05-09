import { useContext } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Container,
  Title,
  PlayListContainer,
  CardContainer,
  CardContent,
  DndIcon,
  CardImage
} from './styles'
import searchContext from '../../Context/searchContext'
import dnd from '../../../public/dnd.png'

const PlayList = () => {
  const { playlistVideos } = useContext(searchContext)

  return (
    <Container>
      <Title>Playlist:</Title>
      <Droppable droppableId='playlist'>
        {(provided) => {
          return (
            <PlayListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {playlistVideos.map((item, index) => {
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
                              iframe
                              src={`https://www.youtube.com/embed/${item}`}
                              controls={0}
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
