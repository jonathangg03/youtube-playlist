import { useContext } from 'react'
import { PlayListContainer } from './styles'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { VideoItem } from './styles'
import searchContext from '../../Context/searchContext'

const PlayList = () => {
  const { playlistVideos } = useContext(searchContext)

  return (
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
                        <VideoItem
                          width='560'
                          height='315'
                          src={`https://www.youtube.com/embed/${item}`}
                          title='YouTube video player'
                          frameborder='0'
                          id={item}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowfullscreen
                        ></VideoItem>
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
  )
}

export default PlayList
