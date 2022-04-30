import VideoItem from '../VideoItem'
import { VideoList } from './styles'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'

const VideosList = ({ items }) => {
  return (
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
  )
}

export default VideosList
