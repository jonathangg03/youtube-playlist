import { useState } from 'react'
import { PlayListContainer } from './styles'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import VideoItem from '../VideoItem'

const PlayList = () => {
  const [videos, setVideos] = useState([])

  const handleOnDragEnd = (result) => {
    console.log(result)
  }

  /*
  ! THIS DRAGEND IS NOT WORKING
  ? TRY ENCAPSULATING APP COMPONENT WITH THE CONTEXT, AND MAKE THERE THE DRAGEND
  */

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='playlist'>
        {(provided) => {
          return (
            <PlayListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {videos.map((item) => {
                return (
                  <Draggable
                    key={item.id.videoId}
                    draggableId={item.id.videoId}
                    index={index}
                  >
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <VideoItem {...item} />
                    </li>
                  </Draggable>
                )
              })}
            </PlayListContainer>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}

export default PlayList
